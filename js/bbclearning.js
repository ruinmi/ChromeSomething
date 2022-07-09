if (/www.bbc.co.uk/.test(website)) {
	window.onkeydown = function () {
		if (window.event.keyCode == 32) {
			event.returnValue = false;
		}
	}

	document.addEventListener('keyup', function (e) {
		const iframeDoc = document.getElementsByName("smphtml5iframebbcMediaPlayer0")[0].contentWindow.document;
		if (iframeDoc == null) {
			return null;
		}
		// let bar = iframeDoc.querySelector("#mediaContainer div.p_playerControls");
		// $(bar).css("opacity", "1");
		// $(bar).css("clip", "");
		let playBtn = iframeDoc.querySelector("button.p_playButton");
		if (playBtn == null) {
			playBtn = iframeDoc.querySelector("button.p_pauseButton");
		}
		const player = iframeDoc.querySelector("#p_v_player_0");

		let keyCode = e.keyCode;
		if (keyCode === 32) {
			event.preventDefault();
			playBtn.click();
		} else if (keyCode === 37) {
			player.currentTime -= 3;
		} else if (keyCode === 39) {
			player.currentTime += 3;
		}
	});
}