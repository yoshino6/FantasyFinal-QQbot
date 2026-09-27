import { Format } from 'alemonjs';
import type { CoreMessage } from './contracts';
export declare const renderCoreMessages: (messages: CoreMessage[]) => Format;
export declare const renderCoreError: (error: unknown) => Format;
