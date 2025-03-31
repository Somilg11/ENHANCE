import axios from "axios";

const BASE_URL = "https://techhk.aoscdn.com";
const API_KEY = import.meta.env.VITE_PICWISH_API_KEY; // Use Vite environment variable

export const processImageWithPicWish = async (file) => {
    try {
        const taskId = await uploadImage(file);
        console.log("Task ID:", taskId);

        if (!taskId) throw new Error("No task ID received from API");

        let enhancedImageUrl = null;
        let attempts = 0;
        const maxAttempts = 4; // Increased attempts
        const delay = 3000; // Wait time in ms

        while (!enhancedImageUrl && attempts < maxAttempts) {
            console.log(`Checking for enhanced image (Attempt ${attempts + 1}/${maxAttempts})`);
            await new Promise(resolve => setTimeout(resolve, delay));
            enhancedImageUrl = await fetchEnhancedImage(taskId);
            attempts++;
        }
        if (!enhancedImageUrl) {
            throw new Error("Enhancement process timed out");
        }
        return enhancedImageUrl;
    } catch (error) {
        console.error("Error processing image:", error.message);
        throw error;
    }
};


const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);

    try {
        const response = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY,
            },
        });

        console.log("Upload response:", response.data); // Debugging

        // Ensure response structure is correct
        if (response.data?.data?.task_id) {
            return response.data.data.task_id;
        } else {
            console.error("Unexpected API response format:", response.data);
            throw new Error("Failed to get task ID");
        }
    } catch (error) {
        console.error("Image upload failed:", error.response?.data || error.message);
        throw new Error("Image upload failed");
    }
};

const fetchEnhancedImage = async (taskId) => {
    if (!taskId) {
        throw new Error("Invalid Task ID - Upload failed");
    }

    try {
        const response = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
            headers: {
                "X-API-KEY": API_KEY,
            },
        });

        console.log("Fetch enhanced image response:", response.data); // Debugging

        // Ensure response structure is correct
        if (response.data?.data?.image) {
            return response.data.data.image;
        } else {
            console.warn("Image processing incomplete. Retrying...");
            return null; // Polling will continue
        }
    } catch (error) {
        console.error("Failed to fetch enhanced image:", error.response?.data || error.message);
        throw new Error("Failed to fetch enhanced image");
    }
};


