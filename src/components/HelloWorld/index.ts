import { Component, Vue, Prop } from "vue-property-decorator";
import Test from "@/components/Test/index.vue";

@Component({
	components: {
		Test,
	},
})
export default class HelloWorld extends Vue {
	@Prop()
	public msg: string | undefined;

	public tests = [
		{ asd: "asd" },
		{ asd: "awd" },
		{ asd: "gg" },
		{ asd: "wad" },
		{ asd: "aed" },
		{ asd: "as" },
		{ asd: "adopdrgksd" },
	];
}
