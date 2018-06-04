export default function generateNames(name) {
  return {
    request: name,
    success: `${name}_SUCCESS`,
    fail: `${name}_FAIL`,
  };
}