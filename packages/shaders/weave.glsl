// weave.glsl — v0.1 sketch (GLSL). Plain/twill/satin via pattern branch.
precision mediump float;
varying vec2 vUv;
uniform float uDensity;   // threads per unit (tx-weave-density)
uniform float uAngle;     // twill angle in radians
uniform int uPattern;     // 0 plain, 1 twill, 2 satin
uniform float uYarnWidth;

float yarnField(float coord, float density) {
  float x = coord * density;
  return smoothstep(1.0 - uYarnWidth, 1.0, 0.5 + 0.5 * sin(3.14159 * x));
}
float weavePattern(float warp, float weft) {
  if (uPattern == 1) {
    float diag = fract((vUv.x + vUv.y * tan(uAngle)) * uDensity * 0.5);
    return mix(warp, weft, step(0.5, diag));
  } else if (uPattern == 2) {
    return mix(warp, weft, 0.8); // long floats: mostly warp on face
  }
  return max(warp, weft); // plain
}
vec3 buildNormal(float warp, float weft, float mask) {
  float h = mix(warp, weft, mask);
  return normalize(vec3(dFdx(h) * 2.0, dFdy(h) * 2.0, 1.0));
}
void main() {
  float warp = yarnField(vUv.x, uDensity);
  float weft = yarnField(vUv.y, uDensity);
  float mask = weavePattern(warp, weft);
  vec3 n = buildNormal(warp, weft, mask);
  gl_FragColor = vec4(n * 0.5 + 0.5, 1.0);
}
