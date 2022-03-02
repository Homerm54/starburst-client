import { axios } from "api/fetcher";
import Console from "lib/Console";
import { FileStorageService } from ".";
import { DropboxBindArgs } from "./types";

// This module has it's own authorization flow, pending to add
// file-service-authorization header on request + interceptor for this request!
async function BindAccountToDropbox(
  this: FileStorageService,
  { code }: DropboxBindArgs
): Promise<void> {
  const res = await axios.post('/file-service/finish-auth-flow', { code });
  Console.log(res.data);
}

export { BindAccountToDropbox };
