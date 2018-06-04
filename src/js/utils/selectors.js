
const Mappings = {};

export default function getBranch(state, path) {
  if (path) {
    const namespace = path.split('.');
    let branch = state;
    namespace.foreach((ns) => {
      branch = branch[ns];
    });
    return branch;
  }
  return state;
}

export const getPortletReducer = (state, name) => getBranch(state, Mappings[name]);

export const setRootState = name => (path) => Mappings[name] = path;

export const getRootState = name => state => getPortletReducer(state, name);