import keystaticConfig from "@/keystatic.config";

import { createReader } from "@keystatic/core/reader";

export function reader() {
  return createReader(process.cwd(), keystaticConfig);
}
