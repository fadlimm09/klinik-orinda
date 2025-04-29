// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://klinik-orinda-chat.vercel.app/" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS, PUT, DELETE" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
    ];
  },
};
