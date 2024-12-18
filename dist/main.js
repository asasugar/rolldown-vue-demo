import { createApp, createElementBlock as _createElementBlock, createElementVNode as _createElementVNode, defineComponent as _defineComponent, openBlock as _openBlock, ref, toDisplayString as _toDisplayString, vModelText as _vModelText, withDirectives as _withDirectives } from "vue";

//#region src/App.vue?vue&type=script&setup=true&lang.ts
var App_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ _defineComponent({
	__name: "App",
	setup(__props, { expose: __expose }) {
		__expose();
		const msg = ref("");
		const __returned__ = { msg };
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});

//#endregion
//#region \0/plugin-vue/export-helper
var export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};

//#endregion
//#region src/App.vue
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return _openBlock(), _createElementBlock("div", null, [
		_cache[1] || (_cache[1] = _createElementVNode(
			"h1",
			null,
			"Hello world1112222",
			-1
			/* HOISTED */
)),
		_createElementVNode(
			"h2",
			null,
			_toDisplayString($setup.msg),
			1
			/* TEXT */
),
		_withDirectives(_createElementVNode(
			"input",
			{
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.msg = $event),
				type: "text"
			},
			null,
			512
			/* NEED_PATCH */
), [[_vModelText, $setup.msg]])
	]);
}
var App_default = /* @__PURE__ */ export_helper_default(App_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/luckincoffee/github/rolldown-vue-demo/src/App.vue"]]);

//#endregion
//#region src/main.ts
createApp(App_default).mount("#app");

//#endregion