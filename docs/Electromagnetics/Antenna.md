# Antenna

## Antenna Characteristics

### Radiation Intensity


$$
\begin{gather}
U(\theta, \phi) \equiv r^{2} P_{avg}
\end{gather}
$$

- independent to $r$

- represent the power density at particular direction.

$$
\begin{gather}
P_{rad} = \int_S r^{2}\vec P_{avg}\cdot d\vec S
=
\int_\Omega U \, d\Omega
\\\\
\implies
P_{rad} = 4\pi U_{avg}
\end{gather}
$$

### Directive Gain

$$
\begin{gather}
G_d(\theta, \phi) = \frac{U(\theta, \phi)}{U_{avg}}
\end{gather}
$$

- normalized version of $U$.

### Directivity

$$
\begin{gather}
D = \max\big\{
G_d{(\theta, \phi)}
\big\}
\end{gather}
$$

- sharpness criteria for antenna

### Power Gain & Efficiency

- in average

	- efficiency
	
	$$
	\begin{gather}
	\eta_r = \frac{P_{rad}}{P_{in}}
	\end{gather}
	$$
	
	- power gain
	
	$$
	\begin{gather}
	G_{p-avg}=\eta_r = \frac{P_{rad}}{P_{in}}
	\end{gather}
	$$

- at particular direction
	- power gain
	
	$$
	\begin{gather}
	G_{p}(\theta, \phi) = \frac{4\pi U(\theta, \phi)}{P_{in}}
	\end{gather}
	$$


### Effective Aperture

- isotropy

$$
\begin{gather}
A_{iso} = \frac{\lambda^{2}}{4\pi}
\end{gather}
$$

- effective

$$
\begin{gather}
A_e = A_{iso} D = \frac{\lambda^{2}}{4\pi}D
\end{gather}
$$

### Beam Solid Angle

![](_attachments/Pasted%20image%2020220605192628.png)

$$
\begin{gather}
\Omega_A = \frac{P_{rad}}{U_{max}}
\end{gather}
$$

## fff

### Hertain dipole

$$
\begin{align}
H_{\phi s	} &= \frac{j\beta I_0 \,dℓ}{4\pi r} \sin \theta \,e^{-j\beta r}
\\\\
E_{\theta s} &= \eta H_{\phi s }
\end{align}
$$

### Half wave

$$
\begin{align}
H_{\phi s} &= \frac{jI_0 \, e^{-j\beta r}}{2\pi}\frac{\cos\big[\cos\theta\big]}{r\sin\theta}
\\\\
E_{\theta s} &= \eta H_{\phi s }
\end{align}
$$


---

## Radar

![](_attachments/Pasted%20image%2020220613185259.png)

$$
\begin{align}
𝔓_i &= \frac{P_{rad}}{4\pi r^{2}}G_d
\\\\
𝔓_s &= \lim_{r\to \infty}\frac{𝔓_i\,\sigma}{4\pi r^{2}}
\end{align}
$$
