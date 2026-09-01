# AI Risk Engine Methodology & Explainable AI (XAI)

NER-LENS implements a **physics-informed multi-criteria landslide risk assessment engine** coupled with an Explainable AI (XAI) factor contribution waterfall.

---

## 1. Multi-Criteria Composite Scoring Formula

The prototype risk score $R \in [0, 100]$ is computed as:

$$R = f(H_{	ext{trigger}}, T_{	ext{terrain}}, S_{	ext{historic}}, E_{	ext{field}}, C_{	ext{exposure}})$$

### A. Hydrological Trigger Component ($H_{	ext{trigger}}$, Max 35 pts)
Normalized cumulative precipitation ($P_{24h}, P_{72h}$) combined with the Antecedent Precipitation Index (API):

$$API = \sum_{t=1}^{n} \lambda^t \cdot P_t \quad (\lambda = 0.84)$$

$$H_{	ext{trigger}} = \left( 0.65 \cdot \min\left(1.0, rac{0.6 P_{24h} + 0.4 P_{72h}}{180}ight) + 0.35 \cdot \min\left(1.0, rac{API}{120}ight) ight) 	imes 35$$

### B. Terrain & Geotechnical Susceptibility ($T_{	ext{terrain}}$, Max 25 pts)
- **Slope Gradient ($	heta$)**: Critical failure window for Himalayan weathered phyllite/shale is $28^\circ \le 	heta \le 45^\circ$ ($S_{	ext{slope}} = 0.95$).
- **Lithology ($L$)**: Multipliers assigned based on GSI NLSM classifications (e.g., *Disang Group Weathered Siltstone = 1.0*, *Unconsolidated Scree = 0.95*, *Massive Granite = 0.40*).

### C. Historical Landslide Proximity ($S_{	ext{historic}}$, Max 18 pts)
Proximity buffer to mapped scarps in the ISRO/NRSC 1998-2022 inventory ($\le 0.5	ext{ km} ightarrow 18	ext{ pts}$, $\le 1.5	ext{ km} ightarrow 13.5	ext{ pts}$).

### D. Field Crack & Subsidence Observations ($E_{	ext{field}}$, Max 14 pts)
Real-time tension crack signals captured by field patrol officers ($\ge 3	ext{ cracks} ightarrow 14	ext{ pts}$, $2	ext{ cracks} ightarrow 10.5	ext{ pts}$).

### E. Consequence & Exposure Factor ($C_{	ext{exposure}}$, Max 8 pts)
Direct downstream settlement population density in drainage cone.

---

## 2. Three Selectable Model Architectures

NER-LENS enables decision-makers to evaluate risk under 3 distinct architectural paradigms:
1. **Physics-Informed Heuristic (API Index)**: Linear superposition of antecedent soil saturation and geotechnical factor-of-safety.
2. **Susceptibility-Trigger Calibrated Matrix**: Enhanced weighting on coupled lithology-rainfall thresholds.
3. **ML Gradient Boosted Risk Estimator (Prototype)**: Non-linear interaction between continuous rainfall surges and steep slope morphology.

---

## 3. Three Pre-Calibrated Mitigation Response Options

For every assessed risk zone, the system generates 3 actionable mitigation choices:
- **Option 1 (Executive Urgency)**: Downhill hamlet evacuation & highway traffic diversion.
- **Option 2 (Field Engineering)**: Dispatch of GREF/BRO/PWD quick-response patrol for culvert unclogging and tension crack sealing.
- **Option 3 (Public Early Warning)**: Broadcast localized advisory via NDMA SACHET CAP, Cell Broadcast, and SMS to village headmen.
