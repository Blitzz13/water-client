import { Component, Vue } from "vue-property-decorator";

@Component({
	name: "game-card-list"
})
export default class GameCardList extends Vue {
	//@Prop()
	//public games: Object[] | undefined;

	protected get games() {
		return [
			{ imageSource: "https://media.playstation.com/is/image/SCEA/days-gone-key-art-buy-now-02-ps4-us-17jan18?$native_nt$", imageName: "PlaceHolder", name: "Days gone" },
			{ imageSource: "https://pyxis.nymag.com/v1/imgs/b8a/2d9/51978afb922d068a2fff7a9c6e0e96ec3b-cyberpunk.rsquare.w700.jpg", imageName: "PlaceHolder", name: "Cyberpunk 2077"  },
			{ imageSource: "https://assets1.ignimgs.com/2017/07/31/star-wars-battlefront-2---button-1501544517635.jpg", imageName: "PlaceHolder", name: "Star Wars Battlefront 2"  },
			{ imageSource: "https://image.api.playstation.com/cdn/EP0082/CUSA01836_00/6JDF9vIBtjnoSwVbjcXaBmj1GrNRdqGl.png", imageName: "PlaceHolder", name: "Deus Ex Mankind Divided" },
			{ imageSource: "https://cdn.vox-cdn.com/thumbor/_UeULbyqXERDDYsu_8EuzGUHbsg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/assets/1083443/half1.jpg", imageName: "PlaceHolder", name: "Half life 2"  },
		];
	}
}
