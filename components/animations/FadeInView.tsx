import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	FADE_IN_BOTTOM_VARIANT,
	FADE_IN_TRANSITION,
} from "../../animation/variants";

export type FadeInViewProps = React.PropsWithChildren<{
	className: string;
}>;

export default function FadeInView(props: FadeInViewProps) {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<motion.div
			className={props.className}
			ref={ref}
			animate={inView ? "visible" : ""}
			initial={"hidden"}
			variants={FADE_IN_BOTTOM_VARIANT}
			transition={FADE_IN_TRANSITION}
		>
			{props.children}
		</motion.div>
	);
}
