type units = {
  gb: string;
  mb: string;
  kb: string;
}

type FileStorageUserData = {
  used: units;
  spaceUsed: units;
  total: units;
  remain: units;
  files: number;
  active: boolean;
}

type DBData = {
  tokens: {
    access_token: string;
  },
  updated_at: Date;
}


// Function args

interface DropboxBindArgs {
  code: string;
}

export type { DropboxBindArgs, FileStorageUserData, DBData, units };
