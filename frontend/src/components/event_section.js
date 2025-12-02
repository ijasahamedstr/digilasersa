import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  CircularProgress,
  Pagination,
  Stack,
} from "@mui/material";
import axios from "axios";

// RTL News / Events section (videos removed - image-only)
function FeedbackCard({ item }) {
  return (
    <Box px={1} height="100%" mb={0}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0d1a1a",
          color: "#fff",
          borderRadius: 2,
          overflow: "hidden",
          direction: "rtl",
        }}
      >
        {/* MEDIA AREA */}
        <CardMedia
          component="div"
          sx={{
            width: { xs: "100%", sm: 469 },
            height: 360,
            position: "relative",
            backgroundColor: "#000",
            overflow: "hidden",
            marginInline: "auto",
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={item.image || item.poster || ""}
              alt={item.name}
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center",
                display: "block",
                backgroundColor: "#000",
              }}
            />
          </Box>
        </CardMedia>

        {/* CONTENT */}
        <CardContent
          sx={{
            flexGrow: 1,
            px: 2,
            pt: 0,
            pb: 0, // REMOVE BOTTOM SPACE
            direction: "rtl",
            "&:last-child": { paddingBottom: 1 }, // REMOVE DEFAULT MUI PADDING
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              textAlign: "right",
              fontFamily: "Tajawal",
            }}
          >
            {item.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              textAlign: "right",
              fontFamily: "Tajawal",
              whiteSpace: "pre-line",
            }}
          >
            {item.text}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

/* --------------------------------------------------------------- */
/* MAIN SECTION COMPONENT */
/* --------------------------------------------------------------- */

export default function Eventsection({ title = " آخر أخبارنا" }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const mainRef = useRef(null);

  /* FETCH DATA */
  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/News`
        );
        if (cancelled) return;

        const data = Array.isArray(response.data)
          ? response.data.reverse()
          : [];
        setEvents(data);
      } catch (err) {
        if (!cancelled) setError("فشل في جلب البيانات");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    return () => (cancelled = true);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [events.length]);

  /* FORMAT DATA */
  const finalList = useMemo(() => {
    return events
      .map((ev) => {
        const name = ev.newsname || ev.title || "بدون عنوان";
        const text = Array.isArray(ev.newsdec)
          ? ev.newsdec[0]
          : ev.newsdec || "";
        const images = Array.isArray(ev.newsimagelinks)
          ? ev.newsimagelinks
          : [];

        const mainImage =
          images[0] || ev.image || ev.mainImage || null;

        if (mainImage) return { name, type: "image", image: mainImage, text };
        return null;
      })
      .filter(Boolean);
  }, [events]);

  /* LOADING */
  if (loading)
    return (
      <Box
        sx={{
          backgroundColor: "#030909",
          py: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    );

  /* ERROR */
  if (error)
    return (
      <Box
        sx={{
          backgroundColor: "#030909",
          py: 10,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography>{error}</Typography>
      </Box>
    );

  if (finalList.length === 0) return null;

  const totalPages = Math.ceil(finalList.length / PER_PAGE);
  const pagedItems = finalList.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  /* RENDER UI */
  return (
    <section
      ref={mainRef}
      dir="rtl"
      style={{
        paddingTop: 40,
        paddingBottom: 80,
        backgroundImage:
          "url('https://i.ibb.co/q3L8N4T9/Whats-App-Image-2025-12-01-at-7-59-08-PM.webp')",
      }}
    >
      <Container maxWidth="xl">
        {/* TITLE */}
        <Box sx={{ width: "100%", mb: 4 }}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontFamily: "Changa,sans-serif",
              fontWeight: 600,
              color: "#096e69",
              mb: 2,
            }}
          >
            {title}
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {pagedItems.map((item, index) => (
            <Grid item key={`${item.name}-${index}`} xs={12} sm={6} md={4}>
              <FeedbackCard item={item} />
            </Grid>
          ))}
        </Grid>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, v) => setPage(v)}
              color="primary"
              shape="rounded"
              showFirstButton
              showLastButton
            />
          </Stack>
        )}
      </Container>
    </section>
  );
}
