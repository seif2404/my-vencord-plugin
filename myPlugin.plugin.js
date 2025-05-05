// ==UserScript==
// @name         Custom Mention Sound
// @description  Change the mention sound to a custom file
// @version      1.0.0
// ==/UserScript==

import { before } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";

const SoundPlayer = findByProps("playSound");

let unpatch;

export default {
  onLoad: () => {
    unpatch = before("playSound", SoundPlayer, (args) => {
      if (args[0] === "mention") {
        // منع الصوت الأصلي
        args[0] = ""; 
        
        // شغل الصوت المخصص بدلًا منه
        const audio = new Audio("https://vocaroo.com/1cgRL9YHUl9u"); // ← غيّر الرابط لصوتك
        audio.volume = 1.0;
        audio.play();
      }
    });
  },
  onUnload: () => {
    unpatch();
  },
};
