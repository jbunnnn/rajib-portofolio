/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Menambahkan 100 ke daftar kualitas yang diizinkan
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;