module.exports = {
  images: {
    domains: ["randomuser.me", "reqres.in", "lh3.googleusercontent.com"],
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/order",
        destination: "/order/pickup",
        permanent: false,
      },
    ];
  },
};
