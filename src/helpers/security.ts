const _3DES = require("nod3des");
  
/**
 * Encrypt a given payload with the supplied encryption key
 *
 * Uses 3DES encryption
 */
export function encrypt(secretKey: string, payload: string) {
  return _3DES.encrypt(secretKey, payload);
}
