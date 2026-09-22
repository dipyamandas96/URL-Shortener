const extractShortCode = (shortUrl) => {
  let parsedUrl;

  try {
    parsedUrl = new URL(shortUrl);
  } catch {
    throw new Error("Invalid short URL");
  }

  const expectedOrigin = new URL(
    process.env.BASE_URL
  ).origin;

  if (parsedUrl.origin !== expectedOrigin) {
    throw new Error("This URL was not created by shrinkly");
  }

  const pathParts = parsedUrl.pathname
    .split("/")
    .filter(Boolean);

  if (pathParts.length !== 1) {
    throw new Error("Invalid short URL format");
  }

  const shortCode = pathParts[0];

  const validShortCode = /^[a-zA-Z0-9_-]+$/.test(
    shortCode
  );

  if (!validShortCode) {
    throw new Error("Invalid short code");
  }

  return shortCode;
};

export default extractShortCode