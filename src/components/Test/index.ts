import { Component, Vue } from "vue-property-decorator";

@Component({
	name: "test"
})
export default class Test extends Vue {
	public test: string = "This the test class";
}
