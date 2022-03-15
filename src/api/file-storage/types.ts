interface DropboxBindArgs {
  code: string;
}

type FileStorageUserData = {
  used: {
    gb: number;
    mb: number;
    kb: number;
  };

  total: {
    gb: number;
    mb: number;
    kb: number;
  };

  remain: {
    gb: number;
    mb: number;
    kb: number;
  };

  files: number;

  spaceUsed: {
    gb: number;
    mb: number;
    kb: number;
  };
}

export type { DropboxBindArgs, FileStorageUserData };
