import React, { useEffect, useState } from "react";

import {
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Skeleton,
} from "@mui/material";
import { Refresh } from "@mui/icons-material";
import axios from "axios";

export default function QuoteCard() {
  const [quote, setQuote] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingQuote, setLoadingQuote] = useState(false);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  async function fetchRandomQuote() {
    try {
      setLoadingQuote(true);
      setErrorMessage("");
      const quoteObject = await axios.get("https://api.quotable.io/random");
      setQuote(quoteObject.data);
      setLoadingQuote(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoadingQuote(false);
    }
  }

  return (
    <div className="mt-5 text-3xl flex flex-col p-7 justify-center items-center">
      <CardContent>
        {loadingQuote ? (
          <div>
            <Skeleton height={80} width={"38vw"} animation="wave" />
            <Skeleton height={30} width={"20vw"} animation="wave" />
          </div>
        ) : quote.content ? (
          <div>
            <Typography
              className="text-3xl"
            >
              {quote.content}
            </Typography>
            <Typography className="mt-6">
              - {quote.author}
            </Typography>
          </div>
        ) : (
          <p className="text-red-600 text-center text-2xl">{errorMessage}</p>
        )}
      </CardContent>
      <CardActions disableSpacing className="flex justify-evenly ">
        <div>
          <IconButton onClick={fetchRandomQuote}>
            <Refresh />
          </IconButton>
        </div>
      </CardActions>
    </div>
  );
}
