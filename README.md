# Image Enhancer

A React-based web application that enhances images using the **PicWish API**. The application allows users to upload images and retrieves enhanced versions after processing.

## 🚀 Features

- Upload images for enhancement
- Uses **PicWish API** for AI-powered image enhancement
- Implements **polling** to check for enhanced images
- Built with **React, Vite, and TailwindCSS**

## 🛠️ Tech Stack

- **Frontend**: React, Vite, TailwindCSS
- **HTTP Requests**: Axios
- **Linting**: ESLint

## 📦 Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/image-enhancer.git
   cd image-enhancer
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the project root and add your **PicWish API Key**:
   ```env
   VITE_PICWISH_API_KEY=your_api_key_here
   ```

4. **Run the Application**
   ```sh
   npm run dev
   ```

## 🔧 Usage

1. **Upload an Image**
   - Select an image file for enhancement.
   
2. **Processing**
   - The image is sent to **PicWish API** for enhancement.
   - Polling mechanism checks the status and retrieves the enhanced image.
   
3. **Download the Enhanced Image**
   - Once processed, the enhanced image URL is displayed.

## 📜 Code Structure

- `src/`
  - `components/`
    - `ImageUpload.jsx` – Handles image selection and uploads
  - `api/`
    - `enhanceImageApi.js` – Manages API calls to PicWish
  - `App.jsx` – Main application entry point

## 📜 API Integration

The application integrates with **PicWish API** using `axios`. Key functions include:

- `uploadImage(file)`: Sends the image file to the API and returns a `task_id`.
- `fetchEnhancedImage(taskId)`: Polls the API for the processed image.
- `processImageWithPicWish(file)`: Handles the complete upload & polling process.

## 🔗 Dependencies

```json
{
  "dependencies": {
    "axios": "^1.8.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.17"
  },
  "devDependencies": {
    "vite": "^6.2.0",
    "eslint": "^9.21.0"
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

## 📄 License

MIT License. Feel free to modify and distribute this project.

---

Enjoy enhancing your images! 🚀

