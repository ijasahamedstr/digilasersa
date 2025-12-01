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
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import axios from "axios";

// RTL News / Events section
function FeedbackCard({ item }) {
  const [playVideo, setPlayVideo] = useState(false);

  const onActivate = () => setPlayVideo(true);
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onActivate();
    }
  };

  return (
    <Box px={1} height="100%" mb={10}>
      {/* More bottom space */}
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
            {item.type === "image" ? (
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectPosition: "center",
                  display: "block",
                  backgroundColor: "#000",
                }}
              />
            ) : !playVideo ? (
              <Box
                onClick={onActivate}
                onKeyDown={onKeyDown}
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                role="button"
                tabIndex={0}
                aria-label={`تشغيل الفيديو: ${item.name}`}
              >
                <Box
                  component="img"
                  src={item.poster || item.image || ""}
                  alt={`${item.name} thumbnail`}
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

                <PlayCircleFilledWhiteIcon
                  sx={{
                    position: "absolute",
                    bottom: 12,
                    right: 12,
                    fontSize: { xs: 48, md: 64 },
                    color: "rgba(255,255,255,0.95)",
                    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.6))",
                  }}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#000",
                }}
              >
                <video
                  controls
                  autoPlay
                  muted
                  playsInline
                  poster={item.poster || item.image || ""}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                >
                  <source src={item.video} type="video/mp4" />
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              </Box>
            )}
          </Box>
        </CardMedia>

        <CardContent sx={{ flexGrow: 1, px: 2, py: 2, direction: "rtl" }}>
          <Typography
            variant="h6"
            sx={{ mb: 1, textAlign: "right", fontFamily: "Tajawal" }}
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

/**
 * Eventsection
 * - Accepts optional `title` prop (default: "الأخبار والفعاليات")
 * - Heading is centered and uses same RTL styling
 */
export default function Eventsection({ title = " آخر أخبارنا" }) {
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
        const mainImage = images[0];
        const videoUrl =
          ev.newsvideolink || ev.videolink || ev.video || ev.videoUrl;

        if (videoUrl)
          return {
            name,
            type: "video",
            video: videoUrl,
            poster: mainImage,
            text,
          };
        if (mainImage)
          return { name, type: "image", image: mainImage, text };
        return null;
      })
      .filter(Boolean);
  }, [events]);

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

  return (
    <section
      ref={mainRef}
      dir="rtl"
      style={{
        backgroundColor: "#030909",
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <Container maxWidth="xl">
        {/* Centered heading */}
        <Box sx={{ width: "100%", mb: 4 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "#fff",
              fontFamily: "Tajawal",
              fontWeight: 700,
              mb: 2,
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }} />

        {/* More vertical space between rows */}
        <Grid container spacing={4} alignItems="stretch">
          {pagedItems.map((item, index) => (
            <Grid item key={`${item.name}-${index}`} xs={12} sm={6} md={4}>
              <FeedbackCard item={item} />
            </Grid>
          ))}
        </Grid>

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
