# Fourier Integral

+ Definition
**assume that**

$$
\begin{gather}
\int_{-\infty}^{\infty}{\left|f(x)\right|dx}\ \leftarrow\ \text{converge}
\end{gather}
$$

**converges**, then


$$
f(x)=\int_0^{\infty}{\big[A(\omega)\ \cos{(\omega x)}+B(\omega )\sin{(x)}\big]\ d\omega}
$$


$$
\begin{align}
A(\omega)=\frac{1}{\pi}\int_{-\infty}^{\infty}{f(x)\ \cos{(\omega x)}\ dx} \qquad B(\omega)=\frac{1}{\pi}\int_{-\infty}^{\infty}{f(x)\ \sin{(\omega x)}\ dx}
\end{align}
$$


---

### Fourier Cosine Integral

$$
f(x)=\int_0^{\infty}{A(\omega)\ \cos{(\omega x)}\ d\omega}
$$


$$
\begin{align}
A(\omega)=\frac{2}{\pi}\int_0^{\infty}{f(x)\ \cos{(\omega x)}\ dx}
\end{align}
$$



### Fourier Sine Integral

$$
\begin{align}
f(x)=\int_0^{\infty}{B(\omega)\ \sin{(\omega x)}\ d\omega}\\\\
B(\omega)=\frac{2}{\pi}\int_0^{\infty}{f(x)\ \sin{(\omega x)}\ dx}
\end{align}
$$

---
### Complex Fourier Integral
Similar to [complex fourier series](Fourier%20Series#Complex%20Fourier%20Series).

$$
\begin{align}
f(x)=\int_{-\infty}^{\infty}{C(\omega)e^{i\omega x}d\omega}\\\\
C(\omega)=\frac{1}{2\pi}\int_{-\infty}^{\infty}{f(x)e^{-i\omega x}dx}
\end{align}
$$



---
