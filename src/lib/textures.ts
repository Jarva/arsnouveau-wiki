import { texturesStore } from '$lib/stores/fileStore';
import { getIdFromResourceLocation } from '$lib/utils/idResolver';

let textures: App.TextureDictionary | undefined;

texturesStore.subscribe((value) => (textures = value));

const mapSpecialTextures = (textureId: string): string => {
	if (textureId === 'novice_spell_book') {
		return 'spellbook_purple';
	}
	return textureId;
};

const getTextureId = (resourceLocation: string): string => {
	return mapSpecialTextures(getIdFromResourceLocation(resourceLocation));
};

export const getTexture = (resourceLocation: string): string => {
	if (textures) {
		const texture = textures[getTextureId(resourceLocation)] || 'Unknown Texture';
		if (texture === 'Unknown Texture') {
			console.log(`Unknown Texture: ${resourceLocation}`);
			return texture;
		}
		return `data:image/png;base64,${texture}`;
	}
	return `Unknown Texture: ${resourceLocation}`;
};
