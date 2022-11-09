# Fourier Transform
**Complex form** or **exponential form** of [Fourier Integral](Fourier%20Integral.md)

$$
𝔉\big[f(t)\big]=\int^{\infty}_{-\infty}{e^{-i\omega t}\ f(t)\ dt}
$$

assume that

$$
\begin{gather}
\int^{\infty}_{-\infty}{|f(x)|dx}
\end{gather}
$$

**converges**

- Comparison
	1. compare to Laplace transform
		
		$$\begin{align}
		s \to i\omega\\\\
		\int_0^{\infty} \to \int^{\infty}_{-\infty}
		\end{align}$$
		
	1. compare to Fourier Series
		Fourier Transform can be regarded as Fourier series whose $p \to \infty$.

---
## Amplitude Spectrum

The amplitude spectrum of $f(t)$ is a graph of $\big|𝔉\big[f(\omega)\big]\big|$

---

## Fourier & Inverse Fourier Transform
+ Fourier transform
	
	$$
	𝔉\big[f(x)\big]=\int^{\infty}_{-\infty}{e^{-i\omega x}\ f(x)\ dx}
	$$

+ inverse Fourier transform

	$$
	𝔉^{-1}\big[F(\omega)\big]=\frac{1}{2\pi}\int_{-\infty}^{\infty}{F(\omega)\ e^{i\omega x}\ d\omega}=f(x)
	$$

### Fourier Sine Transform

+ Fourier sine transform

	$$
	𝔉_s\big[f(x)\big]=\int_0^{\infty}{f(x)\ \sin{(\omega x)\ dx=F(\omega)}}
	$$

+ inverse Fourier sine transform

	$$
	𝔉_s^{-1}\big[F(\omega)\big]=\frac{2}{\pi}\int_0^{\infty}{F(\omega)\,\sin{(\omega x)}\ d\omega}=f(x)
	$$

### Fourier Cosine Transform

+ Fourier cosine transform

$$
𝔉_c\big[f(x)\big]=\int_0^{\infty}{f(x)\,\cos{(\omega x)}\ dx}= F(\omega)
$$

+ inverse Fourier cosine transform

$$
𝔉_c^{-1}\big[F(\omega)\big]=\frac{2}{\pi}\int_0^{\infty}{F(\omega)\ \cos{(\omega x)}\ d\omega}=f(x)
$$
	
---

## Fourier Transform properties


### Linearity

$$
	\begin{gather}
	\alpha, \beta \in ℝ \\\\
	𝔉\big[\alpha f(t)+\beta g(t)\big]=\alpha𝔉\big[f(t)\big]+𝔉\big[\beta g(t)\big]
	\end{gather}
	$$

---

### Time Shifting

$$
	\begin{gather}
	𝔉\big[f(t-t_0)\big]=e^{-i\omega t_0} \ 𝔉\big[f(t)\big]
	\end{gather}
	$$

+ Inverse Time Shifting
		
	$$
		\begin{gather}
		𝔉^{-1}\big[e^{-i\omega t_0}F(\omega)\big](t)=f(t-t_0)
		\end{gather}
		$$
		
### Frequency Shifting

$$
	\begin{gather}
	𝔉\big[e^{i\omega_0 t}\ f(t)\big]=F(\omega-\omega_0)
	\end{gather}
	$$

+ Inverse Frequency Shifting

	$$
		\begin{align}
		𝔉^{-1}\big[F(\omega-\omega_0)\big]=e^{i\omega_0 t} \ f(t)
		\end{align}
		$$
		
### Scaling

$$
	\begin{gather}
	𝔉\big[f(ct)\big]=\frac{1}{|c|}F(\frac{\omega}{c})
	\end{gather}
	$$

+ Inverse Scaling

$$
	\begin{gather}
	𝔉^{-1}\big[F(\frac{\omega}{c})\big]=|c|\ f(ct)
	\end{gather}
	$$

### Time Reversal

$$
	\begin{gather}
	𝔉\big[f(-t)\big]=F(-\omega)\\\\
	𝔉^{-1}\big[F(-\omega)\big]=f(-t)
	\end{gather}
	$$

### Symmetry

$$
	\begin{gather}
	𝔉\big[F(t)\big]=2\pi f(-\omega)
	\end{gather}
	$$
	
### modulation

$$
	\begin{align}
	𝔉\big[f(t)\cos{(\omega_0 t)}\big]&=\frac{1}{2}[F(\omega+\omega_0)+F(\omega-\omega_0)]\\\\
	𝔉\big[f(t) \sin(\omega_0 t)\big]&=\frac{i}{2}[F(\omega+\omega_0)-F(\omega-\omega_0)]
	\end{align}
	$$

### particular example
prof. Laplace Transform

$$
	\begin{gather}
	𝔉\big[H(t)e^{-at}\big]=\frac{1}{a+i\omega}
	\end{gather}
	$$


### Frequency Differentiation

$$
	\begin{gather}
	𝔉\big[t^nf(t)\big]=(i)^nF^{(n)}
	\end{gather}
	$$

---
### Transforms of Derivatives
1. for Fourier transform

	$$
	\begin{align}
	𝔉\big[f'(x)\big]=i\omega F(\omega)
	\\\\
	𝔉\big[f^{(n)}\big]=(i\omega)^{n}\ F(\omega)
	\end{align}
	$$

3. for Fourier sine transform

	$$
	\begin{align}
	𝔉_s\big[f'(x)\big]=-\omega \ 𝔉_c\big[f(x)\big]
	\\\\
	𝔉_s\big[f''(x)\big]= -\omega^2\ 𝔉_s\big[f(x)\big]+\omega f(0)
	\end{align}
	$$
	
1. for Fourier cosine transform

	$$
	\begin{align}
	𝔉_c\big[f'(x)\big]=\omega \, 𝔉_s\big[f(x)\big]-f(0)
	\\\\
	𝔉_c\big[f''(x)\big]=-\omega^2𝔉_c\big[f(x)\big]-f'(0)
	\end{align}
	$$

---
### Transform of Integral

$$
\begin{align}
𝔉\left[\int_{-\infty}^{t}{f(\tau )d\tau}\right]=\frac{1}{i\omega}F(\omega)
\end{align}
$$

---

## Convolution
+ Definition

$$
\begin{gather}
f(t)*g(t)=\int_{-\infty}^{\infty}{f(\tau)\ g(t-\tau)\ d\tau}
\end{gather}
$$

+ Property

$$
\begin{align}
f * g &= g * f \\\\
(\alpha f+\beta g)*h&=\alpha(f*h)+\beta(g*h)
\end{align}
$$

+ Theorem

$$
\begin{gather}
\int_{-\infty}^{\infty}{\left[f(t)*g(t)\right]\ dt}=\int^{\infty}_{-\infty}{f(t)dt}\cdot \int^{\infty}_{-\infty}{g(t)dt}\\\\
𝔉\big[f(t) * g(t)\big]=F(\omega) \ G(\omega)\\\\
𝔉\left[f(t)\ g(t)\right]=\frac{1}{2\pi}F(\omega)*G(\omega)
\end{gather}
$$

---

## Dirac Delta Function
+ Definition

	$$
	\begin{gather}
	\delta(t)=\lim_{a\to 0}{\left[\frac{1}{2a}H(t+a)-H(t-a)\right]}
	\end{gather}
	$$
	
### Fourier Transform

$$
\begin{gather}
𝔉\left[\delta(t)\right]=𝔉\left[\lim_{a\to 0}{\left[\frac{1}{2a}H(t+a)-H(t-a)\right]}\right]=\lim_{a\to 0}{\frac{\sin{(a\omega)}}{a\omega}}=1
\end{gather}
$$

### Filtering

$$
\begin{gather}
\int^{\infty}_{-\infty}{f(t)\delta(t-t_0)\ dt}=f(t_0)
\end{gather}
$$

---
## Discrete Fourier Transform
Let $u=\left\{u_j\right\}^{N-1}_{j=0}$

$$
\begin{gather}
D[u]=U_k=
 \sum_{j=0}^{N-1}{u_j\exp{\left(-i\ \omega_0 j\   \frac{T}{N}\right)}}
 = \sum_{j=0}^{N-1}{u_j\exp{\left(-i\ 2\pi\  j\   \frac{1}{N}\right)}}
\end{gather}
$$

<!--
- Derivation

let $f$ has period T, its [[Fourier Series#Complex Fourier Series|Complex Fourier Series]] is

$$
\begin{gather}
\sum_{k=-\infty}^{\infty}{d_k e^{ik\omega_0 t}}
\end{gather}
$$

in which

$$
\begin{gather}
d_k=\frac{1}{T}\int_P{d_k\ e^{-i\omega_0 kt}}\qquad , \text{for }k\inℤ
\end{gather}
$$
 
 approximate $d_k$ by Riemann sum, then we get
 
 $$
 \begin{align}
 d_k&=\frac{1}{T}\sum_{j=0}^{N-1}{f(t_j)\exp{\left(-i\ \omega_0 j\   \frac{T}{N}\right)}\cdot\frac{T}{N}}
 \\\\
 &=\frac{1}{N}
 \sum_{j=0}^{N-1}{f(t_j)\exp{\left(-i\ \omega_0 j\   \frac{T}{N}\right)}}
 \end{align}
 $$

-->
### Linearity

$$
\begin{gather}
D\left[au+bv\right]=aU_k+bV_k
\end{gather}
$$

### Periodicity

$$
\begin{gather}
U_{k+N}=U_k
\end{gather}
$$

### Inverse N-point DFT

$$
\begin{gather}
u_j=\frac{1}{N}\sum_{j=0}^{N-1}{U_k\exp{\left(i\ \omega_0 j\   \frac{T}{N}\right)}}=\frac{1}{N}\sum_{j=0}^{N-1}{U_k\exp{\left(i\ 2\pi \ j\   \frac{1}{N}\right)}}
\end{gather}
$$

### Complex Fourier Coefficients

$$
\begin{gather}
d_k \approx \frac{1}{N}\cdot U_k
\end{gather}
$$

note that the coefficient of complex Fourier $C_\omega$

$$
\begin{gather}
C_\omega=\frac{1}{2\pi}\cdot 𝔉\left[f(t)\right]
\end{gather}
$$

---
## Sampled Fourier Series

$$
\begin{gather}
S_M\left(\frac{jT}{n}\right)\approx\frac{1}{N}\sum_{k=0}
^{N-1}{V_k\ e^{i\omega_0 jkT/N }}
\end{gather}
$$

in which

$$
V_k=\left\{
\begin{align}
&U_k  &\text{for }k=0, 1, \dots, M
\\\\
 &0   &\text{for }k=M+1, \dots, N-M+1
\\\\
&U_k  &\text{for }k=N-M, \dots, N-1
\end{align}\right.
$$

## Solving the BVP
+ BVP (Boundary Value Problem)

There are three possible condition below

1. $-\infty < x <\infty$

	$\Rightarrow$ Fourier transform
	
2. $0 < x < \infty$ and $u(x,y)\bigg|_{x=0} = 0$
	
	$\Rightarrow$ Fourier sine transform
	
1. $0 < x < \infty$ and $\frac{\partial}{\partial x}u(x, y)\bigg|_{x=0}=0$

	$\Rightarrow$ Fourier cosine transform
	
---
## Method of Separation of Variable

kernel :
assume that
1.

$$u(x,y)=X(x)\ Y(y)$$

2.

$$"f(x)"\ =\ "f(y)"\ =\ -\lambda$$
