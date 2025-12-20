import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { generateText } from 'ai';

const key = process.env.OPENROUTER_API_KEY;
if (!key) {
  console.error('missing OPENROUTER_API_KEY');
  process.exit(2);
}

const openrouter = createOpenRouter({ apiKey: key });
const model = openrouter('openrouter:liquid/lfm-2.2-6b', { usage: { include: true } });

const result = await generateText({ model, prompt: 'Say "OK" and nothing else.' });

console.log(JSON.stringify({
  response: result.response,
  providerMetadata: result.providerMetadata,
  usage: result.usage,
}, null, 2));
