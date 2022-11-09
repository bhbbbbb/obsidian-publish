```ad-note
title: fucking remember this

- cutoff wavelength 

$$
\begin{gather}
\lambda_c = \frac{2d\sqrt{\varepsilon_{r1} - \varepsilon_{r2}}}{m}\,\qquad m=0, 1, 2,\dots
\end{gather}
$$


```

---

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


---

## Parallel Plate Waveguide

### TE Waves

$$
\begin{gather}
\vec E = E_0 \sin{(k_x x)}\sin{(\omega t - k_z z)} \,\hat{a_y}
\\\\
\vec H = - \frac{E_0}{\eta}\sin{\theta} \sin{(k_x x)}\sin{(\omega t - k_z z)} \,\hat{a_x}
+\frac{E_0}{\eta}\cos{\theta} \sin{(k_x x)}\sin{(\omega t - k_z z)} \,\hat{a_z}
\end{gather}
$$

- cutoff wavelength

$$
\begin{gather}
a = m \, \frac{\lambda_x}{2}=\frac{m\,\displaystyle \frac{\lambda}{\cos\theta}}{2}
\\\\
\implies \lambda =\frac{2a}{m}\cos\theta
\\\\
\implies
\lambda_c = \big[\lambda\big]_{\cos\theta=1}  =\frac{2a}{m}
\\\\
\implies
\cos\theta = \frac{\lambda }{\lambda_c}
\end{gather}
$$

- guide wavelength (in $z$ direction)

$$
\begin{gather}
\lambda_g = \frac{2\pi}{k_z}=\frac{2\pi}{k\sin\theta}=\frac{\lambda}{\sin\theta}
\\\\
\implies
\sin\theta=\frac{\lambda}{\lambda_g}
\end{gather}
$$

by the $\lambda_c$ and $\lambda_g$ we can also write the equations as


$$
\begin{gather}
\vec E = E_0 \sin{(k_x x)}\sin{(\omega t - k_z z)} \,\hat{a_y}
\\\\
\vec H = - \frac{E_0}{\eta}\frac{\lambda}{\lambda_g} \sin{(k_x x)}\sin{(\omega t - k_z z)} \,\hat{a_x}
+\frac{E_0}{\eta}\frac{\lambda}{\lambda_c} \sin{(k_x x)}\sin{(\omega t - k_z z)} \,\hat{a_z}
\end{gather}
$$

---

### TM Waves


$$
\begin{gather}
\vec H = H_0 \cos{(k_x x)}\sin{(\omega t - k_z z)} \,\hat{a_y}
\\
\end{gather}
$$

$$
\begin{align}
\vec E &= \eta H_0\sin{\theta} \sin{(k_x x)}\sin{(\omega t - k_z z)} \,\hat{a_x}
+ \eta H_0\cos{\theta} \sin{(k_x x)}\sin{(\omega t - k_z z)} \,\hat{a_z}
\\\\
&= \eta H_0\frac{\lambda}{\lambda_g} \sin{(k_x x)}\sin{(\omega t - k_z z)} \,\hat{a_x} 
+ \eta H_0\frac{\lambda }{\lambda_c} \sin{(k_x x)}\sin{(\omega t - k_z z)} \,\hat{a_z}
\end{align}
$$

---

## Rectangular Waveguide

![](_attachments/Pasted%20image%2020220523185523.png)

- $\gamma$

$$
\begin{gather}
k^{2} = k_x^{2} + k_y^{2} + k_z^{2} = k_x^{2} + k_y^{2} + (-j\gamma)^{2}
\\\\
\implies
\gamma^{2} = k_t^{2} - k^{2}
\end{gather}
$$

---

### TM mode

```ad-note
title: tip

notice that we assuming perfect conductors.

thus,

$$
\begin{gather}
\vec E_n = 0
\\\\
\implies E_{zs}=0, \qquad\text{at boundary}
\end{gather}
$$

```



$$
\begin{gather}
E_{zs} = E_0\sin{\left(\frac{m\pi x}{a}\right)}\sin{\left(\frac{n\pi y}{b}\right)}\,e^{-\gamma z}
\end{gather}
$$

---

### TE mode

$$
\begin{gather}
H_{zs} = H_0 \cos{\left(\frac{m\pi x}{a}\right)}\cos{\left(\frac{n\pi y}{b}\right)}\,e^{-\gamma z}
\end{gather}
$$

---

### Resonators

- TM

$$
\begin{align}
E_{zs} &= \frac{E_0}{2}\sin{\left(\frac{m\pi x}{a}\right)}\sin{\left(\frac{n\pi y}{b}\right)}\left(e^{-jk_z z}+e^{jk_z z}\right)
\\\\
&= E_0\sin{\left(\frac{m\pi x}{a}\right)}\sin{\left(\frac{n\pi y}{b}\right)}\cos{\left(\frac{p \pi z}{d}\right)}
\end{align}
$$


- TE

$$
\begin{align}
H_{zs} &= H_0\cos{\left(\frac{m\pi x}{a}\right)}\cos{\left(\frac{n\pi y}{b}\right)}\sin{\left(\frac{p\pi z}{d}\right)}
\end{align}
$$

#### Q Factors

$$
\begin{gather}
Q = 2\pi\frac{W}{P_L\,T}= \frac{\omega W}{P_L}
\end{gather}
$$

```ad-note
title: recall

$$
\begin{gather}
Q = \frac{X}{R}  = \frac{\omega L}{R} = \frac{\omega I^{2}L}{I^{2}R} = \frac{\omega W}{P}
\end{gather}
$$

```


---

### Dominant Mode

- the mode with lowest $f_c$ (i.e. largest $\lambda_c$).

---

## Cylindrical

- $\beta_c$

$$
\begin{gather}
k^{2} = \beta_c^{2} + \beta^{2}
\end{gather}
$$

### TM mode

$$
\begin{gather}
E_{zs} = J_n\big[\beta_c \rho\big] \,(A_n \cos{n\phi} + B_n\sin{n\phi})e^{\mp j\beta z}
\end{gather}
$$

### TE mode

$$
\begin{gather}
H_{zs} = J_n\big[\beta_c \rho\big](A_n\cos {n\phi} + B_n \sin{n\phi})e^{\mp j \beta z}
\end{gather}
$$

---

## Dielectric Slab Waveguide

- cutoff wavelength 

$$
\begin{gather}
\lambda_c = \frac{2d\sqrt{\varepsilon_{r1} - \varepsilon_{r2}}}{m}\,\qquad m=0, 1, 2,\dots
\end{gather}
$$


```ad-note
title: thinking

$$
\begin{gather}
k\cdot 2d \cdot \cos{\theta_i} - 2\angle{\Gamma} = 2m\pi
\\\\
\implies
\frac{2\pi\sqrt{\varepsilon_{r1}}}{\lambda_0}\cdot d \cdot \cos{\theta_i} - \angle{\Gamma} = m\pi
\\\\
\implies
\angle{\Gamma} = 
k\cdot d \cdot \cos{\theta_i} -  m\pi
\end{gather}
$$

when cutoff $\angle{\Gamma} = 0$

$$
\begin{gather}
k_c \,d\cos{\theta_i} = m\pi
\\\\
\implies
\frac{2\pi\sqrt{\varepsilon_{r1}}}{\lambda_c}\,d\cos{\theta_i} = m\pi
\\\\
\frac{2\pi\sqrt{\varepsilon_{r1}}}{\lambda_c}\,d\sqrt{1-\frac{\varepsilon_2}{\varepsilon_1}} = m\pi
\\\\
\implies
\lambda_c = \frac{2d\sqrt{\varepsilon_{r1} - \varepsilon_{r2}}}{m}
\end{gather}
$$

```
