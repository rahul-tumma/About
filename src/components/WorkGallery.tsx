interface Props extends React.ComponentProps<"div"> {
	children: React.ReactNode;
}

function WorkGallery({ children, ...props }: Props) {
	return <div {...props}>{children}</div>;
}

export default WorkGallery;
