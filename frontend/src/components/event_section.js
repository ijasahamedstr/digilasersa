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

const BORDER_THICKNESS = 8;

/* --------------------------------------------------------------- */
/* 3D GLOW WRAPPER */
/* --------------------------------------------------------------- */
function Glow3DCard({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        perspective: "1600px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          transformStyle: "preserve-3d",
        }}
      >
        {/* MAIN CONTENT */}
        <Box sx={{ position: "relative", zIndex: 10 }}>
          {children}
        </Box>

        {/* GLOW BORDER */}
        <Box
          sx={{
            position: "absolute",
            inset: "-6px",
            borderRadius: "28px",
            background:
              "linear-gradient(135deg,#06f9f3,#00b3ff,#06f9f3)",
            filter: "blur(14px)",
            transform: `translateZ(-${BORDER_THICKNESS}px)`,
            zIndex: 6,
          }}
        />

        {/* SHADOW DEPTH */}
        <Box
          sx={{
            position: "absolute",
            inset: "-25px",
            borderRadius: "36px",
            background: "rgba(0,0,0,0.9)",
            filter: "blur(35px)",
            transform: `translateZ(-${BORDER_THICKNESS * 4}px)`,
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
}

/* --------------------------------------------------------------- */
/* CARD */
/* --------------------------------------------------------------- */
function FeedbackCard({ item }) {
  return (
    <Glow3DCard>
      <Card
        sx={{
          height: "100%",
          backgroundColor: "#0d1a1a",
          color: "#fff",
          borderRadius: "22px",
          overflow: "hidden",
          boxShadow: "35px 35px 45px rgba(0,0,0,0.65)",
          direction: "rtl",
        }}
      >
        <CardMedia
          component="img"
          src={item.image}
          alt={item.name}
          sx={{
            height: 360,
            objectFit: "contain",
            backgroundColor: "#000",
          }}
        />

        <CardContent sx={{ px: 2, py: 2 }}>
          <Typography
            variant="h6"
            sx={{ mb: 1, fontFamily: "Tajawal", textAlign: "right" }}
          >
            {item.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{ fontFamily: "Tajawal", textAlign: "right" }}
          >
            {item.text}
          </Typography>
        </CardContent>
      </Card>
    </Glow3DCard>
  );
}

/* --------------------------------------------------------------- */
/* MAIN SECTION */
/* --------------------------------------------------------------- */
export default function Eventsection({ title = "آخر أخبارنا" }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const PER_PAGE = 6;
  const mainRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_HOST}/News`
        );
        if (!cancelled) {
          setEvents(
            Array.isArray(res.data) ? res.data.reverse() : []
          );
        }
      } catch {
        if (!cancelled) setError("فشل في جلب البيانات");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    return () => (cancelled = true);
  }, []);

  const finalList = useMemo(() => {
    return events
      .map((ev) => {
        const name = ev.newsname || ev.title || "بدون عنوان";
        const text = Array.isArray(ev.newsdec)
          ? ev.newsdec[0]
          : ev.newsdec || "";
        const image = ev.newsimagelinks?.[0] || ev.image;
        return image ? { name, image, text } : null;
      })
      .filter(Boolean);
  }, [events]);

  if (loading)
    return (
      <Box sx={{ py: 10, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box sx={{ py: 10, textAlign: "center", color: "#fff" }}>
        <Typography>{error}</Typography>
      </Box>
    );

  const totalPages = Math.ceil(finalList.length / PER_PAGE);
  const pagedItems = finalList.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

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
      {/* 🔥 EXTRA WIDE CONTAINER */}
      <Container maxWidth={false} sx={{ maxWidth: "1700px" }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontFamily: "Changa,sans-serif",
            fontWeight: 600,
            color: "rgb(15, 245, 236)",
            mb: 6,
          }}
        >
          {title}
        </Typography>

        <Grid container spacing={15}>
          {pagedItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeedbackCard item={item} />
            </Grid>
          ))}
        </Grid>

        {totalPages > 1 && (
          <Stack alignItems="center" sx={{ mt: 6 }}>
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
