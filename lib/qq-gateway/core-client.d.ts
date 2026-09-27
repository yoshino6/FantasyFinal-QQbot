import type { CoreCommandRequest, CoreCommandResponse, NotificationLease } from './contracts';
export declare class CoreApiError extends Error {
    readonly code: string;
    readonly retryable: boolean;
    constructor(code: string, message: string, retryable?: boolean);
}
export type CoreClientOptions = {
    baseUrl: string;
    serviceToken: string;
    timeoutMs?: number;
};
export declare class CoreClient {
    private readonly baseUrl;
    private readonly token;
    private readonly timeoutMs;
    constructor(options: CoreClientOptions);
    private request;
    health(): Promise<{
        ok: boolean;
    }>;
    heartbeat(conversation: {
        scope: 'group';
        id: string;
        botId: string;
    }): Promise<{
        ok: boolean;
    }>;
    command(request: CoreCommandRequest): Promise<CoreCommandResponse>;
    claimNotifications(limit?: number): Promise<{
        notifications: NotificationLease[];
    }>;
    ackNotification(id: string, status: 'sent' | 'failed' | 'uncertain', error?: string): Promise<{
        ok: boolean;
    }>;
}
