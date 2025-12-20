import crypto from 'node:crypto';
import fs from 'node:fs';

export function sha256Hex(data: string | Buffer): string {
  return crypto.createHash('sha256').update(data).digest('hex');
}

export function sha256FileHex(filePath: string): string {
  const data = fs.readFileSync(filePath);
  return sha256Hex(data);
}
