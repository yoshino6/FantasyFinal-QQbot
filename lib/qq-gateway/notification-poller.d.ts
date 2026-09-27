import type { CoreClient } from './core-client';
import type { NotificationLease } from './contracts';
export type NotificationSender = (notification: NotificationLease) => Promise<'sent' | 'failed' | 'uncertain'>;
export declare class NotificationPoller {
    private readonly client;
    private readonly sender;
    private readonly intervalMs;
    private timer?;
    private running;
    constructor(client: CoreClient, sender: NotificationSender, intervalMs?: number);
    start(): void;
    stop(): void;
    private poll;
}
