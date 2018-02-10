import * as enzyme from "enzyme";
import * as adapter from "enzyme-adapter-react-15";

export const configure = () => {
  enzyme.configure({ adapter: new adapter() });
};
