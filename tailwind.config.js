/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  // 在pages&component底下所有檔案以及所有子資料夾裡副檔名為.{js,ts,jsx,tsx}的檔案
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
