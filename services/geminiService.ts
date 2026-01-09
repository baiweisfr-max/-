import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini Client
// IMPORTANT: API Key is expected to be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
你是一个名为 "Nebula AI" 的智能助手，服务于 "NebulaCloud" 托管云平台。
你的职责是帮助访问官网的用户了解我们的产品、解答技术疑问以及提供价格咨询。

关于 NebulaCloud 的关键信息：
1. 核心优势：弹性伸缩、全球节点、企业级安全、全托管运维。
2. 价格：开发者版 (99元/月), 专业版 (399元/月), 企业版 (定制)。
3. 技术栈：支持 Docker, Kubernetes, Node.js, Python, Go, Java 等主流技术。
4. 风格：回答要专业、简洁、热情，富有科技感。
5. 限制：如果用户问及与云计算无关的问题，请礼貌地将话题引回 NebulaCloud 产品本身。

请用中文回复。
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageStream = async (message: string) => {
  const chat = getChatSession();
  return chat.sendMessageStream({ message });
};
