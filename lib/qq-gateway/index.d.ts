import { Router } from 'alemonjs';
import { CoreClient } from './core-client';
declare const core: CoreClient;
export declare const router: Router<string, "message.create" | "private.message.create" | "interaction.create" | "private.interaction.create">;
export { core };
