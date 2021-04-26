import { Transition, Variants } from "framer-motion";

export const FADE_IN_BOTTOM_VARIANT: Variants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

export const FADE_IN_TRANSITION: Transition = {
	duration: 1,
	ease: "easeIn",
};
