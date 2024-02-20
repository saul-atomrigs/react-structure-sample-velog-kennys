export interface Return {
  imageRef: React.RefObject<HTMLImageElement>;

  headingRef: React.RefObject<HTMLHeadingElement>;

  explanationRef: React.RefObject<HTMLHeadingElement>;

  boxRef: React.RefObject<HTMLDivElement>;

  heading: {
    heading: SectionText;
    setHeading: <T>(value: T) => void;
    changeHeadingWithKey: <T>(key: keyof SectionText, value: T) => void;
  };

  box: {
    box: Box;
    setBox: <T>(value: T) => void;
    changeBoxWithKey: <V>(key: keyof Box, value: V) => void;
  };

  image: {
    image: Image | undefined;
    setImage: <T>(value: T) => void;
    changeImageWithKey: <V>(key: keyof Image, value: V) => void;
  };

  options: {
    options: AboutUsOptions;
    setOptions: <T>(value: T) => void;
    changeOptionsWithKey: <V>(key: keyof AboutUsOptions, value: V) => void;
  };
}
k;
