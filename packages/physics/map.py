"""preset physics -> spring preset (v0.1 helper)."""
import json
def pick(p):
    m, b = p["physics"]["mass"], p["physics"]["bending"]
    if p.get("family") in ("jersey",) or p["physics"]["stretch"] > 0.5:
        return "elastic"
    if m > 0.6 and b > 0.6:
        return "heavy"
    if m < 0.35 and b < 0.35:
        return "soft"
    return "firm"
