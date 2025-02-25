// OpenAI API Configuration
const OPENAI_API_KEY = 'your-api-key-here'; // Replace with your actual API key

// Website Configuration
const CONFIG = {
    creator: "Brijrajsinh Jadav",
    version: "1.0.0",
    features: {
        imageEnhancement: true,
        imageGeneration: true,
        chatbot: true
    },
    maxFileSize: 10 * 1024 * 1024, // 10MB
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp'],
    enhancementLevels: {
        standard: 2,
        ultra: 4
    }
};

// Chatbot Configuration
const CHATBOT_CONFIG = {
    name: "AI Assistant",
    creator: CONFIG.creator,
    features: [
        "Image Enhancement",
        "Image Generation",
        "User Guidance",
        "Technical Support"
    ],
    responses: {
        delay: 1000, // Typing animation delay
        maxLength: 500 // Maximum response length
    },
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    max_tokens: 150,
    systemPrompt: `You are a helpful AI assistant specializing in image enhancement. 
    You help users with:
    - Understanding image enhancement features
    - Providing tips for better photo editing
    - Explaining technical concepts in simple terms
    - Suggesting optimal settings for different types of images
    Keep responses concise and friendly.`
};

// Export configurations
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, CHATBOT_CONFIG };
}
