import React, { useRef, useLayoutEffect } from "react";

import { useThree } from "@react-three/fiber";

const CustomCamera = (props) => {
  const { position } = props;
  const [x, y, z] = position;
  const ref = useRef();
  const set = useThree((state) => state.set);
  const size = useThree((state) => state.size);

  useLayoutEffect(() => {
    ref.current.position.set(x, y, z);
    // console.log(ref.current.position);
    ref.current.aspect = size.width / size.height;
    ref.current.updateMatrixWorld();
    ref.current.updateProjectionMatrix();
    set({ camera: ref.current });
  }, [position, size]);

  return <perspectiveCamera ref={ref} {...props} />;
};

export default CustomCamera;
