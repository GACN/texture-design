// sheen.glsl — directional (anisotropic-ish) sheen sketch.
precision mediump float;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vLightDir;
uniform vec3 uYarnDir;
uniform float uAnisotropy;
uniform float uSheen;

float directionalSheen(vec3 V, vec3 L, vec3 T, float aniso) {
  vec3 H = normalize(V + L);
  float th = dot(T, H);
  float sinTH = sqrt(max(0.0, 1.0 - th * th));
  return pow(sinTH, mix(8.0, 128.0, aniso));
}
void main() {
  float s = directionalSheen(normalize(vViewDir), normalize(vLightDir), normalize(uYarnDir), uAnisotropy);
  gl_FragColor = vec4(vec3(s * uSheen), 1.0);
}
