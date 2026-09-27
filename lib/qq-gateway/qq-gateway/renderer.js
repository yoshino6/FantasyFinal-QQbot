import { Format } from "alemonjs";

//#region src/qq-gateway/renderer.ts
/** QQ 专用渲染器：所有命令按钮都要求用户手动确认，禁止自动回填发送。 */
const renderCoreMessages = (messages) => {
	const output = Format.create();
	for (const message of messages) {
		if (message.kind === "image" && message.url) output.addImage(message.url);
		else if (message.kind === "markdown") output.addText(message.text ?? "");
		else if (message.text) output.addText(message.text);
		if (message.buttons?.length) {
			const group = Format.createButtonGroup().addRow();
			for (const button of message.buttons) group.addButton(button.label, button.command, {
				type: "command",
				autoEnter: false
			});
			output.addButtonGroup(group);
		}
	}
	return output;
};
const renderCoreError = (error) => Format.create().addText(error instanceof Error ? error.message : "游戏核心暂时不可用，请稍后再试。");

//#endregion
export { renderCoreError, renderCoreMessages };