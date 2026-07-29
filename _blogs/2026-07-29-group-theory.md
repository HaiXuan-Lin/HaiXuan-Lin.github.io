---
title: "Solutions for Group Theory Exercises"
excerpt: "A concise set of solutions to the exercises from Chen et.al's *Abstract Algebra*."
date: 2026-07-27
presence_type: "Solutions for Exercises"
---

# Groups and Subgroups

Reference: Abstract Algebra, by Chen Meng, Wang Qingxue, and Li Zhiyuan. This book is the lecture notes for the Abstract Algebra I course at Fudan University.

All problems in this article come from Section 1.1 of this book.

> 1. Prove that every subgroup of $\left( \mathbb{Z} ,+ \right)$ has the form $m\mathbb{Z} =\left\lbrace  mz\mid t\in \mathbb{Z} \right\rbrace $, where $m\in \mathbb{Z} \_{\ge 0}$.

Convert this to an equivalent statement: for any $H<\mathbb{Z}$, there must exist $m\in \mathbb{Z} \_{\ge 0}$ such that $H=m\mathbb{Z}=\left\lbrace  mz\mid t\in \mathbb{Z} \right\rbrace $.

If $H=\left\lbrace 0\right\rbrace $, then clearly $m=0$. If $H$ is a nontrivial subgroup, it must contain a smallest positive integer (otherwise, take the largest negative integer $n$; by the existence of inverses, $-n>0$ would also have to be in $H$, a contradiction) — call this element $m$.

> 2. Construct two distinct multiplicative subgroups of $\mathbb{R} \_{>0}$.

$\left( \mathbb{R} \_{>0},\times \right)$, $\left( \mathbb{Q} \_{>0},\times \right)$.

> 3. Let $K$ be a number field, $n>1$. Find as many finite-order elements of $\mathrm{GL}\_n\left( K \right)$ as possible. Can all possible finite-order elements be written down?

An $A\in\mathrm{GL}\_n\left( K \right)$ satisfying this condition satisfies

1. $A$ is diagonalizable;
2. all eigenvalues of $A$ are roots of unity: $\exists m \in \mathbb{Z}\_{>0}$ such that $\lambda^m = 1$.

If $A$ has finite order, i.e. there exists $m\in\mathbb{Z}\_{>0}$ such that $A^m=I$, then the characteristic equation $\lambda^m-1=0$ forces $\lambda$ to be a root of unity.

> 4. Let $U$ be a semigroup, $u\notin U$, and let $G=U\cup\left\lbrace u\right\rbrace $. Try to make $G$ into a monoid such that $u$ becomes the identity element of this monoid, and $U$ becomes a subsemigroup of this monoid. If $U$ itself contains an identity $e_U$, is $e_U$ still an identity element in the newly constructed monoid $G$?

Since originally $u\notin U$, when we bring $u$ into $U$ we need to define the binary operation between $u$ and the other elements: for any $x\in G$,
$$
u\cdot x := x,\qquad x\cdot u:= x,
$$
that is, we define the operation of $u$ with the other elements as "return the other element unchanged." This makes $u$ the identity element of $G$, and $U$ becomes a subsemigroup of $G$. As for $e_U$, since
$$
e_U\cdot u=e_U\ne u,
$$
$e_U$ is no longer the identity element of $G$.

> 5. In a group $G$, let $H_1<G$ and $H_2<G$, and define $H_1H_2\triangleq \left\lbrace  h_1h_2\mid h_1\in H_1,h_2\in H_2 \right\rbrace $. Give an example showing that, in general, $H_1H_2$ need not be a subgroup.

Take an example from a permutation group:
$$
H_1=\left\lbrace  e,\left( 12 \right) \right\rbrace  ,\qquad H_2=\left\lbrace  e,\left( 13 \right) \right\rbrace  ,
$$
$$
H_1H_2=\left\lbrace  e,\left( 12 \right) ,\left( 13 \right) ,\left( 123 \right) \right\rbrace ,
$$
one can see that $H_1H_2$ here does not form a group.

> 6. Let $G$ be a finite group. Prove: for any two distinct elements $a,b\in G$, $o\left(ab\right)=o\left(ba\right)$.

Let $n=o\left(ab\right)$, so $\left(ab\right)^n=e$, then
$$
\left( ba \right) ^n=\underset{n-1}{b\underbrace{aba\cdots bab}a}=b\left( ab \right) ^{-1}a=bb^{-1}a^{-1}a=e.
$$
And clearly the order of $ba$ cannot be smaller than $n$, otherwise the order of $ab$ would be smaller than $n$ as well.

> 7. Let $G$ be a monoid. If for any $a\in G$ there exists $b\in G$ such that $ba=e$, then $G$ must be a group.

This problem actually gives a looser criterion for a monoid to be a group: one need not verify that the inverse is a two-sided inverse, only one side. It also shows that a two-sided inverse is equivalent to a one-sided inverse.

The identity element, closure, and associativity are already given, so we need to establish the inverse. One side of the inverse already holds: $ba=e$ for any $a\in G$; below we derive the other side, $ab=e$.

Let $c$ be a left inverse of $b$, satisfying $cb=e$, then
$$
c=ce=cba=ea=a,
$$
so $ab=e$.

> 8. Let $G$ be a finite group, $G\supset H\ne \emptyset$. If $H$ is closed under the multiplication of $G$, then $H<G$.

This problem actually gives a very useful — and seemingly "weak" — criterion for a subset of a finite group to be a subgroup.

Associativity is inherited from $G$, and closure is already given, so we need to establish the identity element and inverses. Since $H$ is nonempty, take $h\in H$; since $G$ is finite, $H$ is also finite, so there exists $n\in\mathbb{Z}\_{>0}$ such that $h^n=h$, hence $h^{n-1}=e\in H$. If $n=1$, $H$ is the trivial subgroup; if $n=2,3,\cdots$, then necessarily $h^{-1}=h^{n-2}$, so the inverse exists.

> 9. (a) Let $G$ be a group, $g\in G$ an element of finite order, $o\left(g\right)=n$. Let $r$ be a positive integer, $d=\gcd\left(r,n\right)$ the greatest common divisor of $r,n$. Prove: the order of $g^r$ is $o\left(g^r\right)=\tfrac{n}{d}$.
> (b) Let $G$ be a cyclic group of order $m$, $m>1$. Determine all generators of $G$.

(a) Let $o\left(g^r\right)=k$; then $\left(g^{r}\right)=g^{rk}=e$, so $n\mid rk$, hence
$$
rk=0\mod{n},
$$
which is
$$
k=0\mod{\frac{n}{\gcd\left(n,r\right)}}.
$$
This forces $n=\tfrac{n}{d}$.

(b) By the previous problem, if $g$ is a generator, then $g^k$ is also a generator, where $\gcd\left(k,n\right)=1$. The number of generators satisfying this condition is $\varphi\left(n\right)$, where $\varphi$ is the Euler function.

> 10. Let $G$ be a group of order 10. Prove that $G$ has at most 4 nontrivial elements of order 5.

Suppose $G$ has 5 nontrivial elements of order 5. Since the cyclic subgroup generated by an element of order 5 has only 4 non-identity elements, there must be two distinct elements of order 5, $g_1$ and $g_2$, generating two distinct subgroups $G_1\ne G_2$. Then $G_1\cap G_2$ can only have order 1 or 5; since the two subgroups are distinct, the intersection can only be the trivial subgroup $\left\lbrace e\right\rbrace $ of order 1, so
$$
\left\vert G_1G_2 \right\vert=\frac{\left\vert G_1 \right\vert\left\vert G_2 \right\vert}{\left\vert G_1\cap G_2 \right\vert}=\frac{5\times 5}{1}=25>10,
$$
a contradiction, so the assumption fails.

> 11. Let $G$ be a group, $H_1,H_2$ subgroups. Prove $H_1\cup H_2$ is a subgroup if and only if $H_1\subseteq H_2$ or $H_2\subseteq H_1$.

Sufficiency is obvious; we only prove necessity. Take any $x\in H_1,x\notin H_2$, and any $y\in H_2,x\notin H_1$; we show that $x,y$ cannot both be chosen this way, i.e. either $H_1\subseteq H_2$ or $H_2\subseteq H_1$. Since $H_1\cup H_2$ is a subgroup, $xy\in H_1\cup H_2$. Since $y\notin H_1$, $xy\notin H_1$; since $x\notin H_2$, $xy\notin H_2$; hence $xy\notin H_1\cup H_2$, a contradiction! So the choice cannot satisfy both $x$ and $y$ simultaneously.

> 12. Let $\mathbb{R}$ be the set of real numbers, $\mathbb{R}^\ast =\mathbb{R}\backslash\left\lbrace 0\right\rbrace$. For any $a\in\mathbb{R}^\ast ,b\in\mathbb{R}$, define the map $f_{a,b}:\mathbb{R}\to\mathbb{R}$ as follows:
> $$f_{a,b}\left(x\right)=ax+b,\qquad\forall x\in\mathbb{R}.$$
> Let $G=\left\lbrace f_{a,b}\mid a\in\mathbb{R}^\ast ,b\in\mathbb{R}\right\rbrace $ be the set of all such maps.
> (a) Prove $G$ forms a group under composition of maps.
> (b) Find the center $C\left(G\right)$ of $G$.

(a) $f_{1,0}\left(x\right)=x$ is clearly the identity, $f_{\frac{1}{a},-\frac{b}{a}}\left(x\right)=\frac{1}{a}x-\frac{b}{a}$ is clearly the inverse, closure is clearly satisfied (the composition of linear transformations is still a linear transformation), and associativity clearly holds (composition of functions naturally satisfies associativity). So $G$ forms a group.

(b) Suppose $f_{a,b}\circ  f_{a_C,b_C}=f_{a_C,b_C}\circ  f_{a,b}$; expanding gives
$$
b_Ca+\left(1-a_C-b_C\right)b=0,
$$
hence
$$
f_{a_C,b_C}\left( x \right) =x,
$$
$$
C\left( G \right) =\left\lbrace  \mathrm{id} \right\rbrace  .
$$


# Symmetric Groups

Reference: Abstract Algebra, by Chen Meng, Wang Qingxue, and Li Zhiyuan — this book is the lecture notes for the Abstract Algebra I course at Fudan University. Also, *Group Theory and Its Applications in Condensed Matter Physics* by Li Xinzheng, and *Applications of Group Theory to the Physics of Solids* by M. S. Dresselhaus.

All problems in this article come from Section 1.2 of the *Abstract Algebra* book (Chen Meng, Wang Qingxue, Li Zhiyuan), and Chapter 6 of *Group Theory and Its Applications in Condensed Matter Physics* (Li Xinzheng).

---

Below are some supplementary notes.

> **(Partition number)** The partition number $p(n)$ of a positive integer $n$ denotes the number of ways to write $n$ as a sum of positive integers, disregarding order.

For example 4 = 4 = 3+1 = 2+2 = 2+1+1 = 1+1+1+1, hence $p(4)=5$.

> The conjugacy classes of the symmetric group $S_n$ are in one-to-one correspondence with the partitions of $n$, so the number of conjugacy classes is $p(n)$.

For example, the class containing the element $(132)(4)$ in $S_4$ has cycle type $(1^12^03^14^0)$, corresponding to the partition scheme 4 = 3+1.

> **(Hardy–Ramanujan estimate)** The partition number can be asymptotically estimated by the following formula:
> $$p\left( n \right) \sim \frac{1}{4\sqrt{3}n}\exp \left( \pi \sqrt{\frac{2n}{3}} \right) .\qquad (n\to\infty)$$

There is a one-to-one correspondence between the cycle types and conjugacy classes of the symmetric group, and by a general fact of group representation theory, the number of classes equals the number of inequivalent irreducible representations. In fact, in the symmetric group one can construct an explicit one-to-one correspondence between classes and inequivalent irreducible representations.

> The cycle type, or cycle decomposition, or class label is written as $\left( \gamma \right) =\left( 1^{\gamma \_1}2^{\gamma \_2}\cdots n^{\gamma \_n} \right)$, satisfying
> $$\gamma _1+2\gamma _2+\cdots n\gamma _n=n,$$
> where $\gamma_i$, $(i=1,2,\cdots,n)$ are nonnegative integers. A Young diagram is labeled as $\left[ \lambda \right] =\left[ \lambda \_1\lambda \_2\cdots \lambda \_n \right]$, where
> $$\begin{cases}\lambda _1=\gamma _1+\gamma _2+\cdots +\gamma _n,\\\lambda _2=\gamma _2+\cdots +\gamma _n,\\\vdots\\\lambda _n=\gamma _n.\\\end{cases}$$
> Hence $\lambda \_1\ge \lambda \_2\ge \cdots \ge \lambda \_n$, and
> $$\lambda _1+\lambda _2+\cdots +\lambda _n=n.$$

A clarification of notation: sometimes round brackets are used for the cycle type and square brackets for the Young diagram, and sometimes the other way around — different textbooks have different conventions.

> The number of group elements in class $(\gamma)$ is
> $$\frac{n!}{\left( 1^{\gamma _1}\gamma _1! \right) \left( 2^{\gamma _2}\gamma _2! \right) \cdots \left( n^{\gamma _n}\gamma _n! \right)}.$$

We divide by $i^{\gamma_i}$ because each cycle factor has $i$ equivalent ways of being written (cyclic rotations), with $\gamma_i$ factors of length $i$ in total; we divide by $\gamma_i!$ because these factors are disjoint and can be freely permuted among themselves.

> Two Young diagrams related by transposition are called conjugate/dual.

For example, $S_4$ has the following 5 Young diagrams.

- $\lambda=[4]$

```txt
[] [] [] []
```

- $\lambda=[3,1]$

```txt
[] [] []
[]
```

- $\lambda=[2,2]$

```txt
[] []
[] []
```

- $\lambda=[2,1,1]$

```txt
[] []
[]
[]
```

- $\lambda=[1,1,1,1]$

```txt
[]
[]
[]
[]
```

$(1,1,1,1)$ and $(4)$, and $(2,1,1)$ and $(3,1)$, are respectively conjugate; $(2,2)$ is self-conjugate.

> A Young tableau is obtained by filling the numbers $1,2,\cdots,n$ into the Young diagram of $S_n$.

For example, the Young diagram $[3,2,1]$ of $S_6$ can give rise to two Young tableaux, denoted $T_a$ and $T_b$:

$T_a$

```txt
[1] [2] [5]
[3] [4]
[6]
```

$T_b$

```txt
[1] [4] [6]
[5] [2]
[3]
```

> Size of a Young diagram: a diagram with a larger $\lambda_1$ is bigger; otherwise compare $\lambda_2$, and so on.

For example, in the case of $S_4$,
$$
[4] > [3,1] > [2,2] > [2,1,1] > [1,1,1,1].
$$

> Standard Young tableau: a Young tableau in which the numbers increase from left to right in every row and from top to bottom in every column.

For example, $T_a$ above is a standard Young tableau, while $T_b$ is not.

> Size of a standard Young tableau: starting from the top-left corner, compare the numbers in order from left to right and top to bottom; the standard Young tableau in which a larger number appears first is bigger.

For example $T_a<T_b$.

> **(Criterion for primitive idempotents)** An idempotent $\boldsymbol{e}\_i$ is a primitive idempotent if and only if for any $\boldsymbol{x}\in R_G$ we have $\boldsymbol{e}\_i\boldsymbol{x}\boldsymbol{e}\_i=\lambda\boldsymbol{e}\_i$, where $\lambda$ is a constant.

This theorem also plays an important role in group representation theory; see *Group Representation Theory* (Qiu Weisheng).

> The number of idempotents in the group algebra $R_G$ equals the number of invariant subspaces of the left regular transformation on the group space $V_G$, which equals the number of projection operators.

Projection operators are idempotents; that is, from the point of view of the group algebra, there are no idempotents other than projection operators.

> For a unitary representation $A(g)$ of a group $G$ on a representation space $V$, if
> $$V=W_1\oplus W_2\oplus \cdots \oplus W_k$$,
> then $W_i$ is a group-invariant subspace if and only if the projection operator $\hat{P}\_i$ corresponding to $W_i$ satisfies
> $$A\left( g \right) \hat{P}_i=\hat{P}_iA\left( g \right).\qquad (\forall g\in G)$$

"Project first, then transform" is equivalent to "transform first, then project." Unitarity of the representation is necessary here — without it, necessity cannot be guaranteed, since it is unitarity that preserves the inner product.

> For a Young tableau $T$, let the set of row permutations be $R(T)$ and the set of column permutations be $C(T)$; the Young symmetrizer is defined as
> $$\hat{E}\left( T \right) =\hat{P}\left( T \right) \hat{Q}\left( T \right) =\sum_{\scriptsize\begin{array}{c}\hat{p}\in R\left( T \right)\\\hat{q}\in C\left( T \right)\\\end{array}}{\delta _q\hat{p}\hat{q}}.$$

Below we introduce the theorem on Young tableaux; for the detailed proof see *Group Theory and Its Applications in Condensed Matter Physics* (Li Xinzheng). Below I have gathered all the supplementary theorems on the symmetric group into a single statement, without distinguishing the precise attribution to the Young tableau theorem.

> **(Young tableau theorem)**
> Let $R_G$ denote the group algebra of a finite group $G$.
> 1. Let $T$, $T'$ be two Young tableaux of the same Young diagram, with $T'=rT$, $r\in S_n$. If the permutation $s$ acting on $T$ sends the entry $T(i,j)$ to $(sT)(i',j')$, then $s'=rsr^{-1}$ sends the entry $T'(i,j)$ to $(s'T')(i',j')$.
> 2. Let $\hat{p}\in R(T)$, $\hat{q}\in C(T)$; then two entries of $T$ lying in the same row can never appear in the same column of $T'=\hat{p}\hat{q}T$. Conversely, if $T'=rT$ and no two entries in the same row of $T$ ever appear in the same column of $T'$, then there exist $\hat{p}\in R(T)$, $\hat{q}\in C(T)$ such that $r=\hat{p}\hat{q}$.
> 3. Let Young tableaux $T$, $T'$ belong respectively to two Young diagrams $[\lambda]$, $[\lambda']$ with $[\lambda]>[\lambda']$; then there exist two entries lying simultaneously in the same row of $T$ and the same column of $T'$.
> 4. If two entries lie simultaneously in the same row of Young tableau $T$ and the same column of $T'$, then their Young symmetrizers satisfy $\hat{E}(T')\hat{E}(T)=0$.
> 5. For $\boldsymbol{x}\in R_{S_n}$, if for all $\hat{p}\in R\left( T \right)$, $\hat{q}\in C\left( T \right)$ we have $\hat{p}\boldsymbol{x}\hat{q}=\delta \_q\boldsymbol{x}$, then $\boldsymbol{x}=\theta \hat{E}\left( T \right)$, where $\theta$ is the coefficient of the identity element in $\boldsymbol{x}$.
> 6. The Young symmetrizer $\hat{E}(T)$ of a Young tableau $T$ is an essentially idempotent element of $R_{S_n}$; the invariant subspace $R_{S_n}\hat{E}(T)$ is the representation space of an irreducible representation of $S_n$, and $\dim R_{S_n}\hat{E}(T)\mid n!$.
> 7. Different Young tableaux of the same Young diagram of $S_n$ give equivalent irreducible representations; Young tableaux of different Young diagrams give inequivalent irreducible representations.
> 8. The dimension of the irreducible representation corresponding to a Young diagram $[\lambda]$ equals the number of standard Young tableaux of that diagram.

Incidentally, point 1 is exactly Lemma 4.1 of *Abstract Algebra* (Chen Meng, Wang Qingxue, Li Zhiyuan) — they are essentially equivalent!

> (Specht module) $S^\lambda=R_{S_n}\hat{E}(T)$ is a Specht module. By the Young tableau theorem, different Young tableaux of the same Young diagram give isomorphic Specht modules, so a Specht module depends only on the shape $\lambda$ (up to isomorphism).

This is just a term used when stating the Young tableau theorem from the point of view of module theory.

> **(Hook length formula)** For the cell in row $i$, column $j$, define its hook length as
> $$h_{ij}=\text{the number of cells to its right}+\text{the number of cells below it}+1,$$
> then the number of standard Young tableaux is
> $$f^\lambda=\frac{n!}{\prod_{\left(i,j\right)\in\lambda}{h_{ij}}}.$$



Above are some supplementary notes.

---

> 1. Prove the cycle decomposition theorem: any permutation $\sigma \in S_n$ can be uniquely decomposed as a product of disjoint cycles $\sigma =\prod_{i=1}^m{\sigma \_i}$.

Let $\Sigma \_1=\left\lbrace  1,\cdots ,n \right\rbrace $. For $i\geq1$, construct $\tau_i$ and the set $\Sigma_{i+1}$ as follows: take the smallest element $a$ of $\Sigma_i$, and take the cycle
$$
\tau _i=\left( a,\sigma \left( a \right) ,\sigma ^2\left( a \right) ,\cdots ,\sigma ^{k-1}\left( a \right) \right) ,
$$
where $k$ is the smallest positive integer such that $\sigma^k\left(a\right)=a$. Let $\Sigma \_{i+1}=\Sigma \_i\backslash \left\lbrace  a,\sigma \left( a \right) ,\cdots ,\sigma ^{k-1}\left( a \right) \right\rbrace $. If $\tau_i$ is not the identity map, it must be a cycle; the sequence strictly decreases, and since it starts out finite, it must reach the empty set after finitely many steps, and it is clear that the $\tau_i$ are pairwise disjoint.

> 2. For $n>2$, find the elements of order 2 and the elements of order $n$ in the dihedral group $D_{n}$.

The dihedral group has the presentation
$$
\left\langle r,s\mid r^n=e,s^2=e,srs=r^{-1} \right\rangle .
$$
We now want to find $k$ such that $o\left( r^k \right) =\frac{n}{\mathrm{gcd}\left( k,n \right)}=n$; there are $\varphi \left( n \right)$ such $k$, where $\varphi$ is the Euler function. These are the elements of order $n$.

As for elements of order 2, first, all the reflections are
$$
sr^k,\qquad k=0,1,2,\cdots,n-1
$$
As for the rotation part, only $r^{n/2}$ qualifies, and this element exists if and only if $n$ is even.

> 3. Let $\sigma\in S_n$ $\left(n>2\right)$ decompose into disjoint cycle factors of lengths $r_1,\cdots,r_k$ respectively. Find the order $o\left(\sigma\right)$ of $\sigma$.

A cycle factor of length $r$ has order $o\left(\sigma\right)=r$. Here the cycles in the decomposition are disjoint, so the order in which these factors are multiplied can be swapped, hence
$$
o\left(\sigma\right)=\mathrm{lcm}\left(r_1,\cdots,r_k\right).
$$

> 4. Let
> $$\sigma =\left( \begin{matrix}1&2&3&4&5&6&7\\3&	7&5&4&1&6&2\\\end{matrix} \right) \in S_7.$$
> Find $\sigma^{2024}$.

$$
\sigma =\left( \begin{matrix}
	1&		2&		3&		4&		5&		6&		7\\
	3&		7&		5&		4&		1&		6&		2\\
\end{matrix} \right) =\left( 135 \right) \left( 27 \right),
$$
$$
\sigma ^{2024}=\left( 135 \right) ^2=\left( 135 \right) .
$$

> 5. Give an example showing that the decomposition of a permutation $\sigma\in S_n$ $\left(n>2\right)$ into a product of transpositions is not unique.

We know a "chain-like" technique for decomposing into transpositions:
$$
\sigma =\left( \begin{matrix}
	1&		2&		3&		4\\
	3&		2&		1&		4\\
\end{matrix} \right) =\left( 132 \right) =\left( 13 \right) \left( 32 \right) ,
$$
and also, a cycle's representation can be cyclically shifted at will, that is
$$
\left( 132 \right) =\left( 213 \right) =\left( 12 \right) \left( 13 \right) ,
$$
this way we obtain two different decompositions into transpositions.

> 6. Give the cycle decomposition of $\sigma =\left( 1357 \right) \left( 2345 \right) \left( 567 \right) \in S_7$.

$$
\sigma =\left( \begin{matrix}
	1&		2&		3&		4&		5&		6&		7\\
	3&		5&		4&		7&		6&		1&		2\\
\end{matrix} \right) =\left( 1347256 \right) .
$$

> 7. Let $\sigma =\left( 1762 \right) \left( 563 \right) \left( 347 \right) \in S_7$. Give the cycle decomposition of $\sigma^{-2}$.

$$
\sigma =\left( 1752 \right) \left( 346 \right) ,
$$
$$
\sigma ^{-2}=\left( 1752 \right) ^{-2}\left( 346 \right) ^{-2}=\left( 1752 \right) ^2\left( 346 \right) =\left( 15 \right) \left( 27 \right) \left( 346 \right) .
$$

> 8. Let
> $$\sigma =\left( \begin{matrix}1&		2&		3&		4&		5&		6&	7&		8\\8&		3&		5&		6&		7&		1&2&		4\\\end{matrix} \right),$$
> $$\tau =\left( \begin{matrix}1&		2&		3&		4&		5&		6&		7&		8\\7&		1&		8&		5&		6&		2&	4&		3\\\end{matrix} \right).$$
> Give the cycle decomposition of $\sigma \circ \tau ^{-1}$.

$$
\sigma =\left( \begin{matrix}
	1&		2&		3&		4&		5&		6&		7&		8\\
	8&		3&		5&		6&		7&		1&		2&		4\\
\end{matrix} \right) =\left( 1846 \right) \left( 2357 \right) ,
$$
$$
\tau =\left( \begin{matrix}
	1&		2&		3&		4&		5&		6&		7&		8\\
	7&		1&		8&		5&		6&		2&		4&		3\\
\end{matrix} \right) =\left( 174562 \right) \left( 38 \right) ,
$$
$$
\sigma \circ \tau ^{-1}=\left( 1846 \right) \left( 2357 \right) \left( 174562 \right) ^{-1}\left( 38 \right) ^{-1}=\left( 1342 \right) \left( 5678 \right) .
$$

> 9. Find the number of permutations in $S_{10}$ with cycle type $\left[2^23^2\right]$.

Using the counting formula for cycle types:
$$
N=\frac{n!}{\prod\limits_{i=1}^n{i^{\lambda _i}\lambda _i!}}=\frac{10!}{2^22!\cdot 3^22!}=25200.
$$

> 10. Find the number of permutations of order 6 in $S_8$.

The cycle types satisfying the condition (the lcm of the cycle factor lengths is 6, guaranteeing order 6):
$$
\left[ 2^13^1 \right] ,\left[ 2^23^1 \right] ,\left[ 2^13^2 \right] ,\left[ 6^1 \right] ,\left[ 2^16^1 \right] ,
$$
then, using the counting formula from the previous problem, we get $10640$.

> 11. Find the number of permutations of order 4 in $A_8$.

Odd-length cycle factors do not change the parity, while even-length cycle factors do. List the cycle types of order 4 in $S_8$, then keep only the even ones:
$$
\left[ 4^2 \right] ,\left[ 2^24^1 \right] ,\left[ 2^14^1 \right] ,\left[ 4^1 \right] ,
$$
keeping only
$$
\left[ 4^2 \right] ,\left[ 2^14^1 \right] ,
$$
gives $3780$.

# Cosets, Normal Subgroups, Quotient Groups

Reference: Abstract Algebra, by Chen Meng, Wang Qingxue, and Li Zhiyuan. This book is the lecture notes for the Abstract Algebra I course at Fudan University.

All problems in this article come from Section 1.3 of this book.

> Let $G$ be a group, $N<G$, $\forall g\in G$, $\forall n\in N$. Prove that the following statements are equivalent to each other:
>
> 1. $N\lhd G$;
> 2. $gNg^{-1}=N$;
> 3. $gNg^{-1}\subseteq N$
> 4. $gN=Ng$;
> 5. $gN\subseteq Ng$;
> 6. $Ng\subseteq gN$;
> 7. $gng^{-1}\in N$.

It suffices to prove that 1 and 7 are equivalent: 1 implies 7 is obvious, so we only need to show 7 implies 1.

From $gng^{-1}\in N$ we get $gNg^{-1}\subseteq N$; replacing $g$ with $g^{-1}$ gives $g^{-1}Ng\subseteq N$, that is, $gN\subseteq Ng$ and $Ng\subseteq gN$ hold simultaneously, so $gN=Ng$.

> Let $G$ be a group, $A\subseteq G$ nonempty, define $\left[ A,G \right] =\left\langle a^{-1}g^{-1}ag\mid a\in A,g\in G \right\rangle$. Prove $\left[ A,G \right] \lhd G$.

<!-- Let
$$
\bar{A}=\left\langle \bigcup_{h\in G}{h^{-1}Ah} \right\rangle \lhd G,
$$
take any $x\in \left[ \bar{A},G \right] $, then there is a representation
$$
x=\prod_i{\left( \bar{a}_{i}^{-1}g_{i}^{-1}\bar{a}_ig_i \right) ^{e_i}},\qquad \bar{a}_i\in \bar{A},\quad g_i\in G
$$
and also, since $\bar{a}\_i$ has a representation
$$
\bar{a}_i=h_{i}^{-1}a_ih_i,\qquad \exists a_i\in A,h_i\in G
$$
therefore -->

Define $S=\left\lbrace  a^{-1}g^{-1}ag\mid a\in A,g\in A \right\rbrace $, then $\left\langle S \right\rangle =\left[ A,G \right]$; the original problem is equivalent to proving: $\forall s\in S$, $\forall h\in G$, $hsh^{-1}\in \left\langle S \right\rangle$.
$$
ha^{-1}g^{-1}agh^{-1}=\left( a^{-1}h^{-1}ah \right) ^{-1}\left( a^{-1}h^{-1}g^{-1}agh \right) ^1\in \left\langle S \right\rangle .
$$

> If $S$ is a set of left-coset representatives of the group $G$ with respect to the group $H$, i.e. $G=\coprod_{a\in S}{aH}$, prove that $S^{-1}$ is a set of right-coset representatives of $G$ with respect to $H$, i.e. $G=\coprod_{a^{\prime}\in S^{-1}}{Ha^{\prime}}$.

$$
\begin{align*}
G&=G^{-1}=\left( \coprod_{a\in S}{aH} \right) ^{-1}=\coprod_{a\in S}{\left( aH \right) ^{-1}}=\coprod_{a\in S}{\left\lbrace  ah\mid h\in H \right\rbrace  ^{-1}}
\\
&=\coprod_{a\in S}{\left\lbrace  h^{-1}a^{-1}\mid h\in H \right\rbrace }=\coprod_{a\in S}{\left\lbrace  ha^{-1}\mid h\in H \right\rbrace }=\coprod_{a\in S}{Ha^{-1}}=\coprod_{a^{\prime}\in S^{-1}}{Ha^{\prime}}
\end{align*}
$$

> Let $G$ be a group, $N$ a normal subgroup of $G$. If both $N$ and $G/N$ are cyclic groups, must $G$ be an Abelian group? If so, give a proof; otherwise, give a counterexample.

Introduce the following notation:
$$
N=\left\langle n \right\rangle ,\qquad n\in N
$$
$$
G/N=\left\langle mN \right\rangle ,\qquad m\in G,\quad m\notin N
$$
$$
G/N=\left\langle m\left\langle n \right\rangle \right\rangle =\left\lbrace  \begin{array}{c}
 \left\lbrace  m^0n^0,m^0n^1,\cdots ,m^0n^{k-1} \right\rbrace \\
 \left\lbrace  m^1n^0,m^1n^1,\cdots ,m^1n^{k-1} \right\rbrace \\
 \vdots\\
 \left\lbrace  m^{l-1}n^0,m^{l-1}n^1,\cdots ,m^{l-1}n^{k-1} \right\rbrace \\
\end{array} \right\rbrace ,
$$
one can sense that the statement does not hold; try the following counterexample: the dihedral group
$$
D_6=\left\lbrace  r,s\mid r^3=s^2=1,srs^{-1}=r^{-1} \right\rbrace  ,
$$
$$
N=\left\langle r \right\rangle \simeq C_3,\qquad D_6/N=\left\lbrace  N,sN \right\rbrace  \simeq C_2.
$$

> Let $N$ be a normal subgroup of the group $G$. If the quotient group $G/N$ is finite with $\left\vert G/N\right\vert=n$, prove: for any $a\in G$, $a^n\in N$.

Consider the coset corresponding to $a$:
$$
\bar{a}=aN,
$$
then $\bar{a}^n=\left( aN \right) ^n=a^nN=N$, so $a^n\in N$.

> Let $G$ be a group, $H,K<G$. Prove:
>
> 1. The intersection of a left coset of $H$ and a left coset of $K$ is either empty or a left coset of $H\cap K$.
> 2. Every left coset of $H\cap K$ must be the intersection of some left coset of $H$ and some left coset of $K$.
> 3. If both $H$ and $K$ have finite index, then $H\cap K$ also has finite index.

1. Suppose $g_hH\cap g_kK\ne \emptyset$, $g_h,g_k\in G$. Take any $x\in g_hH\cap g_kK$; then $x\left( H\cap K \right) =xH\cap xK=g_hH\cap g_kK$.
2. $x\left( H\cap K \right) =xH\cap xK$.
3. Let $m=\left[ G:H \right]$, $n=\left[ G:K \right]$; there are altogether $m$ pairwise disjoint left cosets of $H$ and $n$ pairwise disjoint left cosets of $K$. Any left coset of $H\cap K$ must arise from some left coset of $H$ and some left coset of $K$, so the left cosets of $H$ and of $K$ have at most $mn$ combinations in total: $\left[ G:H\cap K \right] \le \left[ G:H \right] \left[ G:K \right]$, hence the index of the intersection is finite.

> 1. Prove: for any nonzero natural number $n$, $\left\langle \frac{1}{n}+\mathbb{Z} \right\rangle$ is the unique subgroup of order $n$ of $\mathbb{Q}/\mathbb{Z}$.
> 2. Prove: any subgroup of $\mathbb{Q}/\mathbb{Z}$ generated by finitely many elements is a cyclic group.

(1) First it is easy to verify this is a subgroup. Write
$$
\left\lbrace  \overline{\left( \frac{p}{q} \right) },\overline{\left( \frac{2p}{q} \right) },\cdots ,\overline{\left( \frac{\left( n-1 \right) p}{q} \right) },\overline{0} \right\rbrace 
$$
to represent a subgroup of order $n$; then $n/q\in\mathbb{Z}$, and clearly $n=q$, otherwise the order would be smaller than $n$. We need to show that as long as $p$ stays coprime to $q$, varying $p$ freely always gives the same subgroup, because
$$
\overline{\left( \frac{mp}{n} \right) }=\overline{\left( \frac{mp-n}{n} \right) },
$$
so taking only the representative with $mp<n$ that holds for every $m<n$, we must have $p=1$.

(2) For two subgroups with representatives $1/n$ and $1/m$, take $\left\vert1/n-1/m\right\vert$, which is clearly a generator of a cyclic subgroup.

> Let $A,B$ be two nonempty subsets of a finite group $G$. Prove that if $\left\vert A \right\vert+\left\vert B \right\vert>\left\vert G \right\vert$, then $G=AB$.

Take any $g\in G$; we only need to show $g\in AB$, i.e. there exist $a\in A$, $b\in B$ such that $g=ab$, i.e. $a=gb^{-1}$.

Consider the set $B_g=\left\lbrace  gb^{-1}\mid \forall b\in B \right\rbrace $; clearly $\left\vert B_g \right\vert=\left\vert B \right\vert$, so $\left\vert A \right\vert+\left\vert B_g \right\vert>\left\vert G \right\vert$, and $A$ and $B_g$ must intersect. So there is $gb^{-1}\in B_g$, hence there is $a\in A$ such that $a=gb^{-1}$.

> Let $G$ be a finite group, $H$ a proper subgroup of $G$. Subgroups of the form $gHg^{-1}$ $\left( g\in G \right)$ are called conjugate subgroups of $H$. Prove:
>
> 1. $H$ has exactly $\left[ G:N_G\left( H \right) \right]$ conjugate subgroups;
> 2. The conjugate subgroups of $H$, taken all together, cannot cover the entire group $G$.

(1) Consider the conjugation action of the group $G$ on itself. The number of conjugate subgroups of $H$ is exactly $\mathrm{Orb}\left( H \right)$, and the stabilizer is exactly the normalizer $\mathrm{Stab}\left( H \right) =N_G\left( H \right)$, so
$$
\left\vert \mathrm{Orb}\left( H \right) \right\vert=\frac{\left\vert G \right\vert}{\left\vert \mathrm{Stab}\left( H \right) \right\vert}=\frac{\left\vert G \right\vert}{\left\vert N_G\left( H \right) \right\vert}=\left[ G:N_G\left( H \right) \right] .
$$

(2) Since $H\lhd N_G\left( H \right) =\mathrm{Stab}\left( H \right)$, we have
$$
\left\vert G \right\vert=\left\vert \mathrm{Orb}\left( H \right) \right\vert\left\vert \mathrm{Stab}\left( H \right) \right\vert\ge \left\vert \mathrm{Orb}\left( H \right) \right\vert\left\vert H \right\vert,
$$
but equality cannot hold, because between any two conjugate subgroups there is at least $\left\lbrace e\right\rbrace $ in the intersection.

# Simple Groups and Alternating Groups

Reference: Abstract Algebra, by Chen Meng, Wang Qingxue, and Li Zhiyuan. This book is the lecture notes for the Abstract Algebra I course at Fudan University.

All problems in this article come from Section 1.4 of this book.

---

Here are some important supplementary results.

> **(Classification theorem of finite simple groups)** Every finite simple group is either a cyclic group, or an alternating group, or belongs to one of the infinite families called groups of Lie type, or is one of 26 or 27 special types called sporadic simple groups.

For a more detailed account see [Banana Space: Classification of finite simple groups](https://www.bananaspace.org/wiki/有限单群分类) (in Chinese).

> **(Transitive)** Consider the action of a group $G$ on a set $X$. If for any two elements $x,y\in X$ there exists a group element $g\in G$ such that
> $$ gx=y ,$$
> then the action of $G$ on $X$ is called transitive.

In other words, the group action has only a single orbit, namely the whole set.

> **(Primitive)** Suppose the action of $G$ on $X$ is transitive. If $X$ cannot be partitioned into a nontrivial block system, then this action is called primitive.

A block system refers to partitioning $X$ into several subsets such that, for the action of any $g\in G$ on these sets, either an entire block is fixed, or the entire block is mapped to another block.

For a more detailed explanation of this concept see [Wiki: Primitive permutation group](https://en.wikipedia.org/wiki/Primitive_permutation_group).

An example: the Klein four-group
$$
\left\lbrace  e,\left( 12 \right) \left( 34 \right) ,\left( 13 \right) \left( 24 \right) ,\left( 14 \right) \left( 23 \right) \right\rbrace 
$$
acting on the four vertices of a square is primitive, because

1. Transitivity: examining the group elements, for example, elements sending vertex 1 to 2, 3, and 4 all exist.
2. Block system: if we group 1, 2 into one block and 3, 4 into another, then the elements e, (12)(34) fix both blocks, while (13)(24), (14)(23) map each block to the other.

---

> Give two examples of simple groups of other types.

See the classification theorem of finite simple groups.

> For $n\geq 2$, determine all numbers $i$ $\left( 2\le i\le n \right) $ such that $S_n=\left\langle \left( 1i \right) ,\left( 12\cdots n \right) \right\rangle$.

Conclusion:
$$
S_n=\left\langle \left( 1i \right) ,\left( 12\cdots n \right) \right\rangle \quad \Longleftrightarrow \quad \mathrm{gcd}\left( i-1,n \right) =1.
$$

Necessity: let $d=\mathrm{gcd}\left( i-1,n \right) >1$, then the block
$$
B_i=\left\lbrace  i+jd\mid j\in \mathbb{N} _+ \right\rbrace  ,\quad i\in \mathbb{N} _+
$$
is nontrivial. Since $(1i)$, with $i\equiv 1\left( \mathrm{mod}\;d \right) $, maps $B_i$ to itself, and $(12\cdots n)$ cyclically permutes these blocks $B_i$, the action of the group $\left\langle \left( 1i \right) ,\left( 12\cdots n \right) \right\rangle$ is imprimitive, so it cannot be $S_n$.

Sufficiency: consider
$$
\left( 12\cdots n \right) ^k\left( 1i \right) \left( 12\cdots n \right) ^{-k}=\left( 1+k,i+k \right),\qquad k\in\mathbb{N}_+,
$$
note that if the numbers are taken modulo $n$, then a transposition can be constructed between any two numbers in the following set:
$$
\left\lbrace  1+k\left( i-1 \right) \quad \left( \mathrm{mod}\;n \right) \mid k=0,1,\cdots ,n-1 \right\rbrace  ,
$$
since $\mathrm{gcd}\left( i-1,n \right) =1$, $i-1$ is invertible modulo $n$, so for any $j=0,1,\cdots n-1$, solving the equation
$$
1+k\left( i-1 \right) \equiv j\quad \left( \mathrm{mod}\;n \right) ,
$$
yields every possible $j$. That is, every $(1j)$ can be constructed, so $S_n=\left\langle \left( 1i \right) ,\left( 12\cdots n \right) \right\rangle$.

> Let $A_4$ be the alternating group on four letters.
> (a) Let $N$ be a normal subgroup of $A_4$ containing a 3-cycle. Prove: $N$ contains all 3-cycles.
> (b) Find all normal subgroups of $A_4$, explaining your reasoning.

(a) By the conjugacy-class-splitting theorem for alternating groups, the cycle type $[1^12^03^14^0]$ in $A_4$ splits into two classes that are inverse to each other. Let $\sigma\in N$ be a 3-cycle; then $\sigma^2\in N$ is also a 3-cycle, but $\sigma^2=\sigma^{-1}$, and since $N\lhd A_4$, $N$ contains both of these two classes of 3-cycles, i.e. $N$ contains all 3-cycles.

(b) All the conjugacy classes of $A_4$ are

- $\left\lbrace e\right\rbrace $: 1 element.
- 3-cycle class 1: 4 elements.
- 3-cycle class 2: 4 elements.
- double-transposition class: 3 elements.

A normal subgroup must be a union of conjugacy classes, must contain $e$, and its order must divide the order of the parent group, so we can check case by case. First, $\left\lbrace e\right\rbrace $ and $A_4$ are clearly normal subgroups. 1+4, 1+4+4, 1+4+3 none divide 12, so they are excluded. 1+3 divides 12, and the double-transpositions together with $e$ form the Klein four-group $V_4$, which is a normal subgroup.

> Let $\sigma=\left( 12345 \right) \left( 1234 \right) \in S_5$, and $\tau =\left( 321 \right) \left( 21 \right) \left( 514 \right) \in S_5$.
> (a) Compute $\tau ^{-1}\sigma \tau$.
> (b) Give a $\xi \in S_5$ such that $\xi \sigma \xi ^{-1}=\sigma ^{-1}$.

(a) $\left( 13 \right) \left( 245 \right) $.
(b) $\left( 35 \right) $.

> Let $n\ge 2$ be a positive integer.
> (a) Let $G_n=\left[ S_n,S_n \right]$. Prove that when $n\geq3$, $G_n=A_n$.
> Find $\left[ A_n,A_n \right]$.

(a) Clearly $G_n\subseteq A_n$. We now prove $A_n\subseteq G_n$: since $A_n$ can be generated by a family of 3-cycles, we only need to write these 3-cycles as commutators:
$$
\left[ \left( 12 \right) ,\left( 2j \right) \right] =\left( 1j2 \right) ,   \quad j=3,4,\cdots, n.
$$

(b) For $n=1,2,3$, $A_n$ is clearly Abelian, so $[A_n,A_n]=1$. For $A_4$, as analyzed above, the normal subgroups are $1$, $V_4$, $A_4$, and by order considerations, $A_4/V_4\simeq C_3$ is Abelian, so $[A_4, A_4]=V_4$. For $n\geq5$, since $A_n$ is simple, $[A_n,A_n]=A_n$.

> Describe all normal subgroups of $S_n$ $\left( n\ge 1 \right)$.

When $n=1$, $S_1=1$.

When $n=2$, $S_2=C_2$.

When $n=3$, the normal subgroups of $S_3$ are $1$, $A_3$, $S_3$.

When $n=4$, the normal subgroups of $S_4$ are $1$, $V_4$, $A_4$, $S_4$.

When $n\geq5$, for $N\lhd S_n$, either $N\lhd A_n$, or $N$ contains an odd permutation. Since $A_n$ is simple in this case, if $N\lhd A_n$ then only $N=1$ or $A_n$ is possible. When $N$ contains an odd permutation, since $N\cap A_n\lhd A_n$, we have $N\cap A_n=\left\lbrace e\right\rbrace $ or $A_n$, and since the index of $A_n$ in $S_n$ is already 2, if $N\cap A_n=A_n$ then $N=S_n$.

We now discuss the case $N\cap A_n=\left\lbrace e\right\rbrace $. Consider the natural homomorphism
$$
\pi : S_n\rightarrow S_n/A_n\simeq C_2,
$$
restricting this homomorphism to $N$, we get
$$
\mathrm{ker}\pi _N=N\cap A_n=\left\lbrace  e \right\rbrace  ,
$$
so it is injective, hence
$$
N\simeq \mathrm{Im}\pi _N<\mathrm{Im}\pi _N\simeq C_2,
$$
but when $n\geq5$ there is no normal subgroup of order 2, since the conjugacy class of any transposition contains more than one element, so it is not closed.

> For any positive integers $n\ge m\ge 2$, view $A_m$ naturally as a subgroup of $A_n$. Let $A_{\infty}=\bigcup_{n=2}^{\infty}{A_n}$.
> (a) Explain why $A_\infty$ has a natural group structure such that $A_n<A_\infty$ for every $n\geq2$.
> (b) Prove $A_\infty$ is a simple group.

(a) $A_\infty$ is the union of an ascending chain of subgroups, meaning "the set of even permutations moving only finitely many points."

(b) Every finite $A_n$ is generated by 3-cycles, so $A_∞$ is also generated by all 3-cycles. Choose any two 3-cycles $(abc)$, $(a'b'c')$, and pick a finite permutation sending $\left\lbrace  a,b,c \right\rbrace $ to $\left\lbrace  a^{\prime},b^{\prime},c^{\prime} \right\rbrace $; if it is odd, multiply by a transposition on two disjoint points to make it even, which still has finite support. Hence all 3-cycles are conjugate in $A_∞$.

Let $1\ne N\lhd A_∞$, and take $g\in N\backslash \left\lbrace  1 \right\rbrace $. Let $x\in A_{\infty}\backslash \mathrm{supp}\left( g \right)$; such an $x$ exists since $g\ne 1$, and take $y,z\notin \mathrm{supp}\left( g \right) \cup \left\lbrace  gx \right\rbrace $; such $y\ne z$ exist because $g$ is "an even permutation on finitely many points," so $\mathrm{supp}\left( g \right)$ is finite, and its union with the singleton $\left\lbrace  gx \right\rbrace $ is finite, while the underlying set is infinite. Let $t=(xyz)$; then the commutator
$$
\left[ g,t \right] =gtg^{-1}t^{-1}=g\left( xyz \right) g^{-1}\left( xzy \right) =\left( g\left( x \right) yz \right) \left( xyz \right) =\left( xg\left( x \right) y \right) ,
$$
is a 3-cycle, and since $N$ is normal, $[g,t]\in N$, so all 3-cycles lie in $N$, hence $N=A_\infty$, so $A_∞$ is simple.

> Let $G$ be a subgroup of $S_{2024}$, and suppose $G$ contains an $n$-cycle where $n\geq4$ is even. Prove: $G$ is not simple.

The sign homomorphism $\mathrm{sgn}$ can be restricted to $G$. Let $\sigma\in G$ be an $n$-cycle with $n\geq 4$ even; then $\mathrm{sgn}(\sigma)=-1$, so the restriction is surjective, and
$$
K=G\cap A_{2024}
$$
is $\mathrm{ker}\left( \mathrm{sgn} \_G \right)$, a normal subgroup of $G$, with $\sigma\notin K$ while $\sigma^2\in K$ is not the identity, so $G$ has a nontrivial normal subgroup.

> Solve the following problems:
> (a) Prove: when $n\geq5$ is odd, $A_n=\left\lbrace  \left( 123 \right) ,\left( 12\cdots n \right) \right\rbrace  =\left\lbrace  \left( 12 \right) \left( 34 \right) ,\left( 12\cdots n \right) \right\rbrace $.
> (b) Show that $A_5$ can be generated by an element of order 2 and an element of order 3.

(a) It suffices to prove that a 3-cycle can be generated.
(b) (123), (34)(15).

# Homomorphisms and Isomorphisms of Groups

Reference: Abstract Algebra, by Chen Meng, Wang Qingxue, and Li Zhiyuan. This book is the lecture notes for the Abstract Algebra I course at Fudan University.

All problems in this article come from Section 1.5 of this book.

---

The following are supplementary notes.

> $\mathrm{Hom}\left( A,B \right)$ denotes the set of all group homomorphisms from the group $A$ to the group $B$.

This is category-theoretic notation.

> $\mathrm{Aut}\left( G \right)$, the set of all isomorphisms of a group $G$ to itself, forms a group.

$\mathrm{Hom}\left( G,G \right) =\mathrm{Aut}\left( G \right)$.

> $\mathrm{Inn}\left( G \right)$, the set of automorphisms induced by conjugation of elements of $G$ on $G$, forms a group.

There is a theorem here:

> **(Isomorphism theorem between the inner automorphism group and the central quotient)** $\mathrm{Inn}\left( G \right) \simeq G/Z\left( G \right)$.

The proof only requires taking the homomorphism from $G$ to $\mathrm{Aut}(G)$, considering its kernel, and applying the fundamental homomorphism theorem.

> $\mathrm{End}\left( G \right)$, the monoid formed by all homomorphisms from $G$ to itself.

$$
\mathrm{Inn}\left( G \right) \subseteq \mathrm{Aut}\left( G \right) \subseteq \mathrm{End}\left( G \right) .
$$

> Let $G$ be a group; then
> $$ \mathrm{Aut}_{\mathrm{cent}}\left( G \right) \cong \mathrm{Hom}\left( G/C\left( G \right) ,C\left( G \right) \right) . $$

The above are supplementary notes.

---

> Let $f:G_1\rightarrow G_2$ be a group homomorphism. Prove $f$ is a group isomorphism if and only if there exists a group homomorphism $g:G_2\rightarrow G_1$ such that $g\circ f=\mathrm{id}\_{G_1}$, $f\circ g=\mathrm{id}\_{G_2}$.

From $f$ being a group isomorphism, we derive such a $g$:

Take $g=f^{-1}$; $g\circ f\left( x \right) =f^{-1}\left( f\left( x \right) \right) =x=\mathrm{id}\_{G_2}x$, $\forall x\in G_1$.

$f\circ g\left( y \right) =f\left( f^{-1}\left( y \right) \right) =y=\mathrm{id}\_{G_2}y$, $\forall y\in G_2$.

$g\left( y_1y_2 \right) =f^{-1}\left( y_1y_2 \right) =f^{-1}\left( y_1 \right) f^{-1}\left( y_2 \right) =g\left( y_1 \right) g\left( y_2 \right)$, so $g=f^{-1}$ is precisely the group homomorphism satisfying the condition.

From such a $g$, we derive that $f$ is a group isomorphism:

Proof that $f$ is surjective: by contradiction. Suppose $f$ is not surjective; then there exists $y\in G_2$, $y\notin \left\lbrace  f\left( x \right) \mid x\in G_1 \right\rbrace $, contradicting the definition of $g$, so $f$ is surjective.

Proof that $f$ is injective: by contradiction. Suppose $f$ is not injective; then there exist $x_1, x_2\in G_1$, $x_1\ne x_2$, but $f(x_1)=f(x_2)$; then $g\circ f\left( x_1 \right) =g\circ f\left( x_2 \right)$, i.e. $x_1=x_2$, a contradiction. So $f$ is injective.

> Give an example showing that if $f\,\,: G_1\rightarrow G_2$ is a group homomorphism, $\mathrm{Im}f$ need not be a normal subgroup of $G_2$.

Consider the group homomorphism
$$
f: \mathbb{Z} \longrightarrow S_3, \quad f(1) = (12).
$$

Since $f$ is a group homomorphism,
$$
   f(n) = (12)^n =
   \begin{cases}
   e, & n \text{ even}, \\
   (12), & n \text{ odd}.
   \end{cases}
$$
so
$$
   \mathrm{Im} f = { e, (12) },
$$
which is a subgroup of $S_3$ generated by the transposition $(12)$. However, this subgroup **is not a normal subgroup of $S_3$**; for example, take the element $(13) \in S_3$, and compute the conjugate:
$$
   (13)(12)(13)^{-1} = (23),
$$
but $(23) \notin {e,(12)} = \mathrm{Im} f$. So $\mathrm{Im} f$ is not a normal subgroup of $S_3$.

> Let $f\,\,: G\rightarrow H$ be a group isomorphism, $a\in G$ an element of finite order $n$. Prove that $f(a)$ also has order $n$.

$f\left( a \right) ^n=f\left( a^n \right) =f\left( e \right) =e$. We claim the order of $f\left( a \right)$ cannot be smaller than $n$; otherwise, suppose $o\left( f\left( a \right) \right) =m<n$, then $a^m=f^{-1}\left( f\left( a \right) \right) ^m=f^{-1}\left( f\left( a \right) ^m \right) =f^{-1}\left( e \right) =e$, contradicting that $a$ has order $n$.

> Let $G$ be a group, and let the map $f\,\,: G\rightarrow G$ be given by $f\left( x \right) =x^{-1}\,\,\left( \forall x\in G \right)$.
> (a) Give a necessary and sufficient condition for $f$ to be a group homomorphism.
> (b) If $G$ is a finite group and $\left\vert \mathrm{Aut}\left( G \right) \right\vert=1$, prove $\left\vert G \right\vert\le 2$.

(a) $f\left( xy \right) =\left( xy \right) ^{-1}=y^{-1}x^{-1}=f\left( y \right) f\left( x \right)$, so $f$ is a group homomorphism if and only if $f\left( x \right) f\left( y \right) =f\left( y \right) f\left( x \right)$, i.e. $x^{-1}y^{-1}=y^{-1}x^{-1}$, i.e. $xy=yx$, $\forall x, y\in G$. So a necessary and sufficient condition is that $G$ is Abelian.

(b) For a finite group, $f$ is clearly an automorphism; if $\left\vert \mathrm{Aut}\left( G \right) \right\vert=1$, then $f=\mathrm{id}\_G$.

$\forall x\in G$, $f\left( x \right) =\mathrm{id}\_Gx$ means $x^{-1}=x$, $x^2=e$, so $x=e$ or $o(x)=2$. So $G$ must be isomorphic to a direct product of finitely many cyclic groups of order 2:
$$
G\simeq \bigotimes_i{\mathbb{Z} _{2i}},
$$
however, when there are $m=2,3,\cdots$ factors, there is a group isomorphism $\varphi \,\,: \bigotimes_i{\mathbb{Z} \_{2i}}\rightarrow \bigotimes_i{Z_{2i}^{\prime}}$,
$$
\varphi \left( z_1,\cdots ,z_m \right) =\left( z_2,\cdots ,z_m,z_1 \right)
$$
so $m=1$, hence $\left\vert G \right\vert\le 2$.

> If a group $G$ satisfies $C(G)={e}$, then $\left\vert C\left( \mathrm{Aut}\left( G \right) \right) \right\vert=\left\lbrace  \mathrm{id} \right\rbrace $.

That is, prove: $\forall \varphi \in C\left( \mathrm{Aut}\left( G \right) \right)$, $\forall g\in G$, $\varphi \left( g \right) =g$.

We can prove: $\forall \varphi \in C\left( \mathrm{Aut}\left( G \right) \right)$, $\forall g\in G$, $g^{-1}\varphi \left( g \right) \in C\left( G \right)$.

For any $\varphi \in C\left( \mathrm{Aut}\left( G \right) \right)$, take $l_g\in \mathrm{Inn}\left( G \right)$, $\forall h\in G$, $l_g\left( h \right) =ghg^{-1}$; then $\varphi \circ l_g=l_g\circ \varphi$. Applying both sides to $h$ gives
$$
\varphi \left( ghg^{-1} \right) =g\varphi \left( h \right) g^{-1},
$$
since $\varphi$ is surjective, $\varphi(h)$ ranges over all of $G$, so $g^{-1}\varphi \left( g \right) \in C\left( G \right) =\left\lbrace  e \right\rbrace $,
$$
g^{-1}\varphi \left( g \right) =e,\quad \varphi \left( g \right) =g,\quad \varphi =\mathrm{id}.
$$
so $C\left( \mathrm{Aut}\left( G \right) \right) =\left\lbrace  \mathrm{id} \right\rbrace $.

> Solve the following problems:
> (a) Are $\mathbb{R}/\mathbb{Q}$, $\mathbb{R}/\mathbb{Z}$, $\mathbb{Q}/\mathbb{Z}$, viewed as additive groups, pairwise isomorphic?
> (b) Is the group $\left( \mathbb{R} ,+ \right)$ isomorphic to the group $\left( \mathbb{R} \_{>0},\times \right)$? Is $\left( \mathbb{R} \_{>0},\times \right)$ isomorphic to $\left( \mathbb{R} \backslash \left\lbrace  0 \right\rbrace  ,\times \right)$?

(a) None of the three are isomorphic to one another.

A group isomorphism preserves torsion, i.e. it does not change the order of elements. $\mathbb{R}/\mathbb{Q}$ is torsion-free, $\mathbb{R}/\mathbb{Z}$ has torsion but is not purely torsion, and $\mathbb{Q}/\mathbb{Z}$ is purely torsion.

(b) $f\,\,: \mathbb{R} \rightarrow \mathbb{R} \_{>0}$, $\forall x\in\mathbb{R}$, $f(x)=e^x$ satisfies, for any $x_1,x_2\in\mathbb{R}$,
$$
f\left( x_1+x_2 \right) =e^{x_1+x_2}=e^{x_1}e^{x_2}=f\left( x_1 \right) f\left( x_2 \right),
$$
so $f$ is a group homomorphism; it is clearly surjective, and since this function is strictly increasing, it is an isomorphism.

$\left( \mathbb{R} \_{>0},\times \right)$ and $\left( \mathbb{R} \backslash \left\lbrace  0 \right\rbrace  ,\times \right)$ are not isomorphic, because the former is torsion-free while the latter has torsion.

> Let $f\,\,: S_n\rightarrow G$ be a group homomorphism, $G$ an Abelian group. Prove $\left\vert \mathrm{Im}f \right\vert\le 2$.

When $n=1$, $f\,\,: e_{S_n}\mapsto e_G$, so clearly $\left\vert \mathrm{Im}f \right\vert=1\le 2$.

When $n=2$, $\left\vert \mathrm{Im}f \right\vert=\left\vert S_n \right\vert/\left\vert \mathrm{Ker}f \right\vert=2/\left\vert \mathrm{Ker}f \right\vert\le 2$.

When $n\geq 3$, for any $x,y\in S_n$, $f\left( xy \right) =f\left( x \right) f\left( y \right) =f\left( y \right) f\left( x \right) =f\left( yx \right)$, so $f\left( xy \right) f\left( yx \right) ^{-1}=e_G$, hence $xyx^{-1}y^{-1}\in \mathrm{Ker}f$, so $\left[ S_n,S_n \right] =\left\langle xyx^{-1}y^{-1} \right\rangle \subseteq \mathrm{Ker}f$, i.e. $A_n\in \mathrm{Ker}f$.
$$
\left\vert \mathrm{Im}f \right\vert=\frac{\left\vert S_n \right\vert}{\left\vert \mathrm{Ker}f \right\vert}\le \frac{\left\vert S_n \right\vert}{\left\vert A_n \right\vert}=2.
$$

> Let $f\,\,: G\rightarrow G^{\prime}$ be a group homomorphism. Prove:
> (a) $f$ is injective if and only if, for any group $H$ and group homomorphisms $g_i\,\,: H\rightarrow G\,\,\left( i=1,2 \right)$ with $f\circ g_1=f\circ g_2$, we always have $g_1=g_2$.
> (b) $f$ is surjective if and only if, for any group $H$ and group homomorphisms $h_i\,\,: G'\rightarrow H\,\,\left( i=1,2 \right)$ with $h_1\circ f=h_2\circ f$, we always have $h_1=h_2$.

(a) $f$ being injective is equivalent to $\mathrm{Ker}f=1$, so
$$
f\circ g_1=f\circ g_2\Longleftrightarrow \forall h\in H, f\circ g_1\left( h \right) =f\circ g_2\left( h \right) \Longleftrightarrow f\left( g_1\left( h \right) \right) =f\left( g_2\left( h \right) \right) ,
$$
if $f$ is injective, then $g_1\left( h \right) =g_2\left( h \right)$, so $g_1=g_2$.

(b) Similarly.

> Solve the following problems:
> (a) Suppose the family of normal subgroups of a group $G$ satisfies the ascending chain condition (ACC), i.e. if there is a chain of normal subgroups
$$H_1 \triangleleft H_2 \triangleleft \cdots \triangleleft H_s \triangleleft G,$$
then there exists $n_0 \in \mathbb{N}$ such that $H_n = H_{n+1}$ for all $n \ge n_0$. Prove: if $f : G \to G$ is a surjective homomorphism, then $f$ is an isomorphism.
> (b) Similarly, suppose the family of normal subgroups of $G$ satisfies the descending chain condition (DCC), i.e. if there is a chain of normal subgroups $$G \triangleright H_1 \triangleright H_2 \triangleright \cdots \triangleright H_s,$$ then there exists $n_0 \in \mathbb{N}$ such that $H_n = H_{n+1}$ for all $n \ge n_0$. Prove: if $f : G \to G$ is an injective homomorphism, then $f$ is an isomorphism.
> (c) Similarly, suppose the family of normal subgroups of $G$ satisfies both the ascending chain condition (ACC) and the descending chain condition (DCC). If $f : G \to G$ is a homomorphism, must $f$ be an isomorphism? Explain your reasoning. (Hint: you may use the example from Exercise 7 of Section 1.4.)

Compare with the Krull–Schmidt theorem. See the Zhihu article: "2.7 Krull-Schmidt Theorem" by Alex, on Zhihu: https://zhuanlan.zhihu.com/p/680368430.

Chain conditions also have a background in commutative algebra.


> Let $\phi \,\,: S_n\rightarrow S_n$ be an automorphism of the symmetric group $S_n$.
> (a) Prove: if $n\ne 6$, then $\phi$ maps transpositions in $S_n$ to transpositions.
> (b) Find the structure of $\mathrm{Aut}S_5$.

(a) Use the formula for the size of the centralizer of an element of the symmetric group:
$$
\left\vert C_{S_n}\left( \sigma \right) \right\vert=\prod_{L\ge 1}{L^{m_L}m_L!}, \quad\sum_{L\ge 1}{m_LL}=n,
$$
where $L$ and $m_L$ are respectively the cycle-length index and the multiplicity of that length in the cycle decomposition of $\sigma\in S_n$.

Claim: after applying the automorphism, a transposition's cycle type contains no cycle of length $k\geq 3$.

Since an automorphism preserves the centralizer,
$$
\left\vert C_{S_n}\left( \phi \left( \left( ij \right) \right) \right) \right\vert\le k\left( n-k \right) !\le 2\left( n-2 \right) !,
$$
so $\phi((ij))$ contains a cycle of length $k\geq 2$. Suppose it contains $r$ transpositions; then
$$
2\left( n-1 \right) !=2^er!\left( n-2r \right) !,
$$
solving this gives $r=1$, or $n=6$ and $r=3$; hence when $n\ne 6$, $\phi$ must map transpositions to transpositions.

(b) 1. $C\left( S_5 \right) =\left\lbrace  e \right\rbrace $, 2. $\mathrm{Aut}\left( S_5 \right) =\mathrm{Inn}\left( S_5 \right)$, 3. $\mathrm{Inn}\left( S_5 \right) \simeq S_5/C\left( S_5 \right)$
$$
\mathrm{Aut}\left( S_5 \right) \simeq S_5.
$$

> Let $G$ be a finite group with $\left\vert G \right\vert=p_1p_2\cdots p_s$, where these $p$'s are distinct primes. Let $n$ be the number of normal subgroups of $G$. Prove $n\le 2^s$.

Note that $2^s=\left\vert 2^P \right\vert$, $P=\left\lbrace  p_1,p_2,\cdots ,p_s \right\rbrace $; consider constructing a map from normal subgroups to $2^P$: $\varphi \,\,: \left\lbrace  N\mid N\lhd G \right\rbrace  \rightarrow 2^P$. Since $\left\vert N \right\vert\mid \left\vert G \right\vert$,
$$
\left\vert N \right\vert=\prod_{i\in I}{p_i},\quad I\subseteq \left\lbrace  1,2,\cdots ,s \right\rbrace ,\quad \varphi \left( N \right) =\left\lbrace  p_i\mid p_i\mid \left\vert N \right\vert \right\rbrace  .
$$
$\varphi$ is injective; otherwise take $H,K\lhd G$, $H\ne K$; if $\varphi \left( N \right) =\left\lbrace  p_i\mid p_i\mid \left\vert N \right\vert \right\rbrace  \ne 1$, then since $HK$, $H\cap K\lhd G$, and there exists a prime $p_j\in \varphi \left( H \right) =\varphi \left( K \right)$, $p_j\notin \varphi(H\cap K)$, we get
$$
\left\vert HK \right\vert=\frac{\left\vert H \right\vert\left\vert K \right\vert}{\left\vert H\cap K \right\vert}=\cdots p_{j}^{2}\cdots ,
$$
a contradiction! Hence $\left\vert H \right\vert\ne \left\vert K \right\vert$, $\varphi \left( H \right) \ne \varphi \left( K \right)$.
$$
\left\vert \mathrm{Dom}\varphi \right\vert=\left\vert \mathrm{Im}\varphi \right\vert\le 2^s
$$
that is, $n\leq 2^s$.

# Direct Products and Semidirect Products of Groups

Reference: Abstract Algebra, by Chen Meng, Wang Qingxue, and Li Zhiyuan. This book is the lecture notes for the Abstract Algebra I course at Fudan University.

All problems in this article come from Section 1.6 of this book.

---

Here are some supplementary results.

> For elements $a,b$ of finite order, we have
> $$o\left( \left( a,b \right) \right) =\mathrm{lcm}\left( o\left( a \right) ,o\left( b \right) \right) .$$

Because the order $k$ must satisfy $a^k=e$ and $b^k=e$.

> Let $A$, $B$ be finite groups; then $A\times B$ is a cyclic group if and only if both $A,B$ are cyclic groups and $$\mathrm{gcd}\left( A,B \right) =1.$$

Take a generator $x$ of $H$; then
$$
\left\vert H \right\vert=\left\vert H_1 \right\vert\left\vert H_2 \right\vert=o\left( x \right) =\mathrm{lcm}\left( o(a),o(b) \right) ,
$$
by the divisibility relation from Lagrange's theorem, we get
$$
\left\vert H \right\vert=\mathrm{lcm}\left( o\left( a \right) ,o\left( b \right) \right) \le \mathrm{lcm}\left( \left\vert H_1 \right\vert,\left\vert H_2 \right\vert \right) \le \left\vert H_1 \right\vert\left\vert H_2 \right\vert,
$$
by the order relation of the direct product, all the above inequalities must be equalities, so
$$
\mathrm{lcm}\left( \left\vert H_1 \right\vert,\left\vert H_2 \right\vert \right) =\left\vert H_1 \right\vert\left\vert H_2 \right\vert\Longleftrightarrow \mathrm{gcd}\left( \left\vert H_1 \right\vert,\left\vert H_2 \right\vert \right) =1,
$$
and at the same time, the two projections $a,b$ of $x$ are respectively generators of $H_1,H_2$.

> **(Goursat's lemma)** Let $G_1, G_2$ be groups, $H\leq G_1\times G_2$, and let
> $H_1=\pi \_1\left( H \right) \le G_1$,
> $H_2=\pi \_2\left( H \right) \le G_2$,
> $N_1=\left\lbrace  a\in H_1\,\,: \left( a,e \right) \in H \right\rbrace  \trianglelefteq H_1$,
> $N_2=\left\lbrace  b\in H_2\,\,: \left( e,b \right) \in H \right\rbrace  \trianglelefteq H_2$.
> Then there exists a group isomorphism $$\varphi \,\,: H_1/N_1\rightarrow H_2/N_2,$$ such that $$H=\left\lbrace  \left( a,b \right) \in H_1\times H_2\,\,\mid \varphi \left( aN_1 \right) =bN_2 \right\rbrace .$$ Conversely, if $H_1,H_2,N_1,N_2,\varphi$ are given such that $H_1/N_1\simeq H_2/N_2$ holds, then $H_1\times H_2\leq G_1\times G_2$. If the above groups are all finite, then
> $$\left\vert H \right\vert=\frac{\left\vert H_1 \right\vert\left\vert H_2 \right\vert}{\left\vert H_1/N_1 \right\vert}=\frac{\left\vert H_1 \right\vert\left\vert H_2 \right\vert}{\left\vert H_2/N_2 \right\vert}.$$

Once $\varphi$ is constructed, it is easy to verify that this is a well-defined homomorphism, and then one only needs to check it is bijective.

> **(Short exact sequence)** A short exact sequence refers to a chain of homomorphisms:
> $$1 \;\longrightarrow\; N \;\xrightarrow{i}\; G \;\xrightarrow{\pi}\; Q \;\longrightarrow\; 1$$
> where $i$ is injective, $\pi$ is surjective, and $\mathrm{ker}\left( \pi \right) =\mathrm{im}\left( i \right) =N$. A short exact sequence describes the fact that $G$ has a normal subgroup $N$ with quotient group $G/N\simeq Q$. Then $\pi$ is exactly the natural projection $\pi \left( g \right) =gN$.

The notion of a short exact sequence comes from the concept of an **exact sequence**; see Wikipedia for this concept.

> **(Group extension)** Let $G$ be a group, $N\trianglelefteq G$ a normal subgroup. The short exact sequence
> $$1 \;\longrightarrow\; N \;\longrightarrow\; G \;\xrightarrow{\pi}\; G/N \;\longrightarrow\; 1$$
> is called a group extension. $G$ is called an extension of $N$ by $G/N$.

Note that the extension is not unique — different extensions can give different $G$. For example, take $N=C_2$, $Q=C_2$; then $G=C_4$ and $G=V_4$ (the Klein four-group) share the same short exact sequence.

> **(Splitting and sections)** An extension
> $$1 \;\longrightarrow\; N \;\longrightarrow\; G \;\longrightarrow\; Q \;\longrightarrow\; 1$$
> is called split if there exists a group homomorphism
> $$s:Q\rightarrow G$$
> such that $\pi ∘ s=\mathrm{id}\_Q$. Such an $s$ is called a section. Splitting means
> $$G\simeq N\rtimes Q$$
> i.e. $G$ can be viewed as a semidirect product of $N$ and $Q$.

A section does not always exist. One might think that simply picking an arbitrary representative in each coset of the quotient group, and letting $s$ be "lift the representative of the quotient element into $G$," already gives such an $s$. But this need not be a group homomorphism. For example, letting $g_1$ and $g_2$ be two representatives, the $s$ given by the above scheme does not always satisfy
$$
s\left( g_1g_2 \right) =s\left( g_1 \right) s\left( g_2 \right) .
$$

So: **if we can choose representatives such that they form a subgroup, and then define $s$ as the lift of the representatives into $G$, this satisfies the definition of a section. This gives a semidirect product decomposition:**

> **(Complement)** Let $G$ be a group, $N\unlhd G$ a normal subgroup, and $H\le G$ a subgroup satisfying
> 1. $G=NH$
> 2. $N\cap H=\left\lbrace  e \right\rbrace $
> Such an $H$ is a complement of $N$ in $G$, giving $G\simeq N\rtimes Q$.

To summarize further, in order to decompose $G$ as a semidirect product, we need "the (representatives of the) quotient group $G/N$ to form a subgroup of $G$ (up to isomorphism)."

Example problem: Is $C_4$ isomorphic to $C_2\times C_2$ or $C_2\rtimes C_2$? What about $V_4$ (the Klein four-group)?

Answer: $C_4$ cannot be decomposed as a (semi)direct product, because although the unique nontrivial normal subgroup $\left\lbrace  e,r^2 \right\rbrace  \simeq C_2$ has quotient group $\left\lbrace  \bar{e},\bar{r} \right\rbrace $ (or $\left\lbrace  \bar{e},\bar{r}^3 \right\rbrace $, etc.) isomorphic to $C_2$, and up to isomorphism $C_2\le C_4$, no matter how the representatives of the quotient group are chosen, they never form a subgroup of $C_4$. $V_4$ can be split as $C_2\times C_2$.

Summary:

> **(Semidirect product)** Let $G$ be a group. If
> (1) $N\lhd G$,
> (2) $H<G$ with $G=NH$ and $N\cap H=\left\lbrace e\right\rbrace $,
> then there is a semidirect product decomposition
> $$G\simeq N\rtimes H,$$
> where the action is induced by conjugation:
> $$\varphi :H\rightarrow \mathrm{Aut}\left( N \right) , \varphi \left( h \right) \left( n \right) =hnh^{-1}.$$
> In particular, if $H\lhd G$, then $N$ and $H$ normalize each other, $\varphi$ degenerates to the trivial action
> $$hnh^{-1}=n,$$
> and the semidirect product becomes a direct product
> $$G\simeq N\times H$$.
> Conversely, if there is a semidirect product decomposition $G\simeq N\rtimes H$, then necessarily
> $$G/N\simeq H$$
> But given $G/N\simeq H$, it does not necessarily follow that $G\simeq N\rtimes H$, unless one can suitably choose representatives and lift them to elements of $G$; if the resulting set $H'$ forms a group isomorphic to $H$,
> $$H'\simeq H,$$
> only then does $G\simeq N\rtimes H$ hold. The equivalent condition is that $N$ has a complement, i.e. there exists $H'<G$ with $NH'=G$, $N\cap H'=\lbrace e\rbrace $, $H'\simeq G/N$. In particular, if $H'\lhd G$, then the semidirect product becomes a direct product $G\simeq N\times H$.


---

> Is the additive group of rationals $\mathrm{Q}$ isomorphic to $\mathrm{Q}\times\mathrm{Z}\_2$? Explain your reasoning.

Not isomorphic; the former is torsion-free, the latter has torsion.

> Solve the following problems:
> (a) Give an example satisfying the following condition: $H<G_1\times G_2$, and $H$ cannot be written as a direct product of $H_1$ $(H_1<G_1)$ and $H_2$ $(H_2<G_2)$.
> (b) Let $G_1$, $G_2$ be groups. Prove: every subgroup of $G_1\times G_2$ has the form $H_1\times H_2$ $(H_i<G_i, i=1,2)$ if and only if, for any $g_1\in G_1$, $g_2\in G_2$, both $g_1,g_2$ have finite order and $\mathrm{gcd}\left( o\left( g_1 \right) ,o\left( g_2 \right) \right) =1$.

(a) Take $G_1=G_2=\mathbb{Z}$, $H=\left\lbrace  \left( n,n \right) \mid n\in \mathbb{Z} \right\rbrace $; then $H<G_1\times G_2$ is a proper subgroup. Suppose there exist subgroups $H_1$, $H_2$ of $G_1$, $G_2$ respectively such that $H=H_1\times H_2$; then $(1,1)\in H_1\times H_2$, so $1\in H_1,H_2$, hence $H_1,H_2=\mathbb{Z}$, forcing $H=G_1\times G_2$, a contradiction.

(b) Necessity: (i) All elements have finite order — otherwise suppose $g_1\in G$ has infinite order; take any $g_2\in G_2$, then the subgroup $\left\langle \left( g_1,g_2 \right) \right\rangle\leq G_1\times G_2$ is an infinite cyclic group. But the direct product of $\left\langle g_1 \right\rangle =H_1$ and $\left\langle g_2 \right\rangle =H_2$ is not a cyclic group, a contradiction. (ii) Any two elements have coprime orders — suppose $g_1\in G_1$, $g_2\in G_2$ with $d=\mathrm{gcd}\left( o\left( g_1 \right) ,o\left( g_2 \right) \right) >1$; take $x=\left( g_{1}^{o\left( g_1 \right) /d},g_{2}^{o\left( g_2 \right) /d} \right)$, $H=\left\langle x\right\rangle$; then $o(x)=d$. If $H=H_1\times H_2$, then $\mathrm{gcd}\left( \left\vert H_1 \right\vert,\left\vert H_2 \right\vert \right) =1$, but $\left\vert H_1 \right\vert=o\left( g_{1}^{o\left( g_1 \right) /d} \right) =d$, $\left\vert H_2 \right\vert=o\left( g_{2}^{o\left( g_2 \right) /d} \right) =d$, a contradiction.

Sufficiency: for any $H\leq G_1\times G_2$, let $H_1=\pi_1(H)\leq G_1$, $H_2=\pi_2(H)\leq G_2$, $N_1=\left\lbrace  a\in H_1\mid\left( a,e \right) \in H \right\rbrace $, $N_2=\left\lbrace  b\in H_2\mid\left( e,b \right) \in H \right\rbrace $; then $N_1\lhd H_1$, $N_2\lhd H_2$, so there is an isomorphism $\varphi \,\,: H_1/N_1\rightarrow H_2/N_2$ such that $H=\left\lbrace  \left( a,b \right) \in H_1\times H_2\mid\varphi \left( aN_1 \right) =bN_2 \right\rbrace $. If $\varphi$ is nontrivial, then there is a finite nontrivial quotient group $Q\simeq H_1/N_1\simeq H_2/N_2$; let a prime $p\mid o(a),o(b)$, giving $\mathrm{gcd}\left( o\left( a \right) ,o\left( b \right) \right) \ne 1$, a contradiction. So $\varphi$ must be trivial, and $H=H_1\times H_2$.

> Let $n>1$. If $n$ is odd, prove $D_{2n}\simeq D_n\times \mathbb{Z} \_2$. Show that the above conclusion fails when $n$ is even.

This is actually a theorem from the classification of point groups.

> Let $G$ be a group with the property: for any $x\in G$, $x^2=e$.
> (a) Prove $G$ is an Abelian group.
> (b) If $G$ is a finite group, prove there exists a nonnegative integer $n$ such that $G\simeq \bigotimes_n{\mathbb{Z} \_2}$.

(a) This involves a notion called the "exponent."

Take any $x,y\in G$; we have
$$
\left( xy \right) ^2=xyxy=e,
$$
and $x^{-1}=x$, similarly for $y$, so
$$
xy=yx.
$$

(b) Use the fundamental theorem of finitely generated Abelian groups.

> Let $G_1$, $G_2$ be finite groups such that $\mathrm{gcd}\left( \left\vert G_1 \right\vert,\left\vert G_2 \right\vert \right) =1$. Prove $\mathrm{Aut}\left( G_1\times G_2 \right) =\mathrm{Aut}\left( G_1 \right) \times \mathrm{Aut}\left( G_2 \right)$.

Construct $\Phi  : \mathrm{Aut}\left( G_1 \right) \times \mathrm{Aut}\left( G_2 \right) \rightarrow \mathrm{Aut}\left( G_1\times G_2 \right)$: for all $f_1\in \mathrm{Aut}\left( G_1 \right) ,f_2\in \mathrm{Aut}\left( G_2 \right) ,g_1\in G_1,g_2\in G_2$, let $\Phi \left( f_1,f_2 \right) \left( g_1,g_2 \right) =\left( f_1\left( g_1 \right) ,f_2\left( g_2 \right) \right) =f_{12}\left( g_1,g_2 \right)$, where $f_{12}\in\mathrm{Aut}(G_1\times G_2)$. For all $\left( f_1,f_2 \right), \left( f_{1}^{\prime},f_{2}^{\prime} \right) \in \mathrm{Aut}\left( G_1 \right) \times \mathrm{Aut}\left( G_2 \right)$, $\Phi \left( \left( f_1,f_2 \right) \left( f_{1}^{\prime},f_{2}^{\prime} \right) \right) =\Phi \left( f_1\circ f_{1}^{\prime},f_2\circ f_{2}^{\prime} \right)$, applying this to $\left( g_1,g_2 \right)$ gives
$$
\left( f_1\circ f_{1}^{\prime}\left( g_1 \right) ,f_2\circ f_{2}^{\prime}\left( g_2 \right) \right) =f_{12}\left( f_{1}^{\prime}\left( g_1 \right) ,f_{2}^{\prime}\left( g_2 \right) \right) =f_{12}\circ f_{12}^{\prime}\left( g_1,g_2 \right) ,
$$
i.e. $\Phi \left( \left( f_1,f_2 \right) \left( f_{1}^{\prime},f_{2}^{\prime} \right) \right) =\Phi \left( f_1,f_2 \right) \Phi \left( f_{1}^{\prime},f_{2}^{\prime} \right)$, so $\Phi$ is a homomorphism.

$\Phi$ is injective: if $\Phi \left( f_1,f_2 \right) =\Phi \left( f_{1}^{\prime},f_{2}^{\prime} \right)$, i.e. $\left( f_1\left( g_1 \right) ,f_2\left( g_2 \right) \right) =\left( f_{1}^{\prime}\left( g_1 \right) ,f_{2}^{\prime}\left( g_2 \right) \right)$, then $f_1=f_1'$, $f_2=f_2'$.

$\Phi$ is surjective: since $\mathrm{gcd}\left( \left\vert G_1 \right\vert,\left\vert G_2 \right\vert \right) =1$, any group homomorphism $f\,\,: G_1\rightarrow G_2$ must be trivial. Define the embeddings and projections
$$
\iota _1\left( g \right) =\left( g,e \right) , \iota _2\left( h \right) =\left( e,h \right) , \pi _1\left( g,h \right) =g, \pi _2\left( g,h \right) =h,
$$
for $\varphi \in \mathrm{Aut}\left( G_1\times G_2 \right)$, let $\varPsi \left( \varphi \right) =\left( \pi \_1\circ \varphi \circ \iota \_1,\pi \_2\circ \varphi \circ \iota \_2 \right) \in \mathrm{Aut}\left( G_1 \right) \times \mathrm{Aut}\left( G_2 \right)$. Take any $g\in G_1$; let $\varphi \left( g,e \right) =\left( x,y \right) \in G_1\times G_2$, then $o\left( x,y \right) =\mathrm{lcm}\left( o\left( x \right) ,o\left( y \right) \right) =o\left( x \right) o\left( y \right)$, using $\mathrm{gcm}\left( o\left( x \right) ,o\left( y \right) \right) =1$ here. From $o\left( \left( g,e \right) \right) \mid\left\vert G_1 \right\vert$ we know $o\left( x \right) o\left( y \right) \mid \left\vert G_1 \right\vert$, while $o\left( y \right) \nmid \left\vert G_1 \right\vert$, so $o\left( y \right) =1$, $y=e$, hence $\varphi \left( g,e \right) \in G_1\times \left\lbrace  e \right\rbrace $; similarly $\varphi \left( e,h \right) \in \left\lbrace  e \right\rbrace  \times G_2$. So $\varPsi$ is injective, hence $\left\vert \mathrm{Aut}\left( G_1\times G_2 \right) \right\vert\le \left\vert \mathrm{Aut}\left( G_1 \right) \right\vert\left\vert \mathrm{Aut}\left( G_2 \right) \right\vert$; also $G_1$, $G_2$ are finite, and since $\Phi$ is injective, it follows that $\Phi$ is surjective.

So $\Phi$ is an isomorphism.

> Solve the following problems:
> (a) Let $G=G_1\times \cdots \times G_n$ be a direct product of groups, $p_i\,\,: G\rightarrow G_i$ the projection onto the $i$-th component, $\phi \_i\,\,: S\rightarrow G_i$ a group homomorphism, for $i=1,\cdots ,n$. Prove there exists a unique group homomorphism $\phi \,\,: S\rightarrow G$ such that $p_i\circ \phi =\phi \_i$ for every $i=1,\cdots,n$.
> (b) Let $G=G_1\times \cdots \times G_n$, $j_i\,\,: G_i\rightarrow G$ the natural embedding, $\psi \_i\,\,: G_i\rightarrow S$ a group homomorphism, for $i=1,\cdots,n$. Give an example showing that a unique group homomorphism $\psi\;:\;G\to S$ satisfying $\psi \circ j_i=\psi \_i$ for every $i=1,\cdots,n$ need not exist.

(a) Construct $\phi \,\,: S\rightarrow G$, $s\mapsto \phi \left( s \right) =\left( \phi \_1\left( s \right) ,\cdots ,\phi \_n\left( s \right) \right)$; one can verify $\phi$ is a group homomorphism satisfying the requirement.

We now prove $\phi$ is unique. Suppose $\psi \,\,: S\rightarrow G, s\mapsto \psi \left( s \right) =\left( \psi \_1\left( s \right) ,\cdots ,\psi \_n\left( s \right) \right)$ also satisfies $p_i\circ \psi =\phi \_i$; then
$$
\psi \left( s \right) =\left( \psi _1\left( s \right) ,\cdots ,\psi _n\left( s \right) \right) =\left( p_1\left( \psi \left( s \right) \right) ,\cdots ,p_n\left( \psi \left( s \right) \right) \right) =\left( \phi _1\left( s \right) ,\cdots ,\phi _n\left( s \right) \right) =\phi \left( s \right) ,
$$
so $\psi=\phi$.

(b) $G=\mathbb{Z} \_2\times \mathbb{Z} \_2$, $S=S_3$, $\psi_1\;:\;0\mapsto e, 1\mapsto (12)$, $\psi_2\;:\;0\mapsto e, 1\mapsto (13)$.

Suppose there exists $\psi \,\,: G\rightarrow S_3$ such that $\psi \circ j_1=\psi \_1$, $\psi \circ j_2=\psi \_2$. Since $j_1\left( 1 \right) =\left( 1,0 \right)$ and $j_2\left( 1 \right) =\left( 0,1 \right)$ commute, and $\psi$ is a group homomorphism, $\psi \circ j_1\left( 1 \right) =\left( 12 \right)$ and $\psi \circ j_2\left( 1 \right) =\left( 23 \right)$ would have to commute, a contradiction.

> Let $G_1$, $G_2$ be groups, $K<G_1\times G_2$, such that the projections $p_1\,\,: K\rightarrow G_1$, $p_2\,\,: K\rightarrow G_2$ are both surjective.
> (a) Let $N=\mathrm{Ker}\left( p_1 \right)$. Prove $N$ can be viewed as a normal subgroup of $G_2$.
> (b) Let $H=G_2/N$, $f_2\,\,: G_2\rightarrow H$ the natural projection. Construct a natural surjective homomorphism $f_1\,\,: G_1\rightarrow H$ such that $f_1\circ p_1=f_2\circ p_2$.
> (c) Define $$G_1\times _HG_2=\left\lbrace  \left( g_1,g_2 \right) \in G_1\times G_2\mid f_1\left( g_1 \right) =f_2\left( g_2 \right) \right\rbrace  ,$$ called the fiber product of $G_1$ and $G_2$ over $H$. Prove $K=G_1\times \_HG_2$.

(a) $\mathrm{Ker}\left( p_1 \right) =\left\lbrace  \left( 1,k_2 \right) \in K \right\rbrace $. Let $\varphi\;:\;N=\mathrm{Ker}\left( p_1 \right) \rightarrow G_2$, $\left( 1,k_2 \right) \mapsto k_2$,
$$
\varphi \left( \left( 1,k_2 \right) \left( 1,k_{2}^{\prime} \right) \right) =\varphi \left( \left( 1,k_2k_{2}^{\prime} \right) \right) =k_2k_{2}^{\prime}=\varphi \left( \left( 1,k_2 \right) \right) \varphi \left( \left( 1,k_{2}^{\prime} \right) \right) ,
$$
so $\varphi$ is a group homomorphism. If $\varphi \left( \left( 1,k_2 \right) \right) =1$, then $k_2=1$, so $\mathrm{Ker}\varphi =\left\lbrace  1 \right\rbrace $, i.e. $\varphi$ is injective, so $\mathrm{Ker}\left( p_1 \right) \sim \mathrm{Im}\varphi$, and $\mathrm{Im}\varphi <G_2$. We now prove $\mathrm{Im}\varphi \lhd G_2$.

Take any $g_2\in G_2$; since $p_2\,\,: K\rightarrow G_2$ is surjective, there must exist $g_1$ such that $\left( g_1,g_2 \right) \in K$. Take any $n\in\mathrm{Im}\varphi$:
$$
g_2ng_{2}^{-1}=\varphi \left( \left( g_1,g_2 \right) \right) \varphi \left( \left( 1,n \right) \right) \varphi \left( \left( g_{1}^{-1},g_{2}^{-1} \right) \right) =\varphi \left( \left( 1,g_2ng_{2}^{-1} \right) \right) \in \mathrm{Im}\varphi ,
$$
so $N=\mathrm{Ker}p_1\simeq \mathrm{Im}\varphi \lhd G_2$.

(b) For any $a\in G_1$, there exists $b\in G_2$ such that (with $N=\mathrm{Ker}p_1\simeq \mathrm{Im}\varphi \lhd G_2$) we set $f_1\circ p_1\left( a,b \right) =f_1\left( a \right)=f_2\circ p_2\left( a,b \right) =f_2\left( b \right) =bN$. We first show $f_1$ is well-defined: suppose there is another $b^{\prime}\in G_2$ with $\left( a,b^{\prime} \right) \in K$; then
$$
\left( a,b \right) ^{-1}\left( a,b^{\prime} \right) =\left( 1,b^{-1}b^{\prime} \right) \in \mathrm{Ker}p_1\lhd K,
$$
so $b^{-1}b^{\prime}\in \mathrm{Im}\varphi \simeq \mathrm{Ker}p_1$, hence $b^{\prime}\mathrm{Ker}p_1=b\mathrm{Ker}p_1$. Next we show $f_1$ is a homomorphism: for any $\left( a_1,b_1 \right)$, $\left( a_2,b_2 \right) \in K$, $f_1\left( a_1a_2 \right) =b_1b_2N=b_1N\cdot b_2N=f_1\left( a_1 \right) f_2\left( a_2 \right)$. Finally we show $f_1$ is surjective: for any $bN$, take $\left( a,b \right) \in K$, giving $f\left( a \right) =bN$.

(c) (i) $K\subseteq G_1\times \_HG_2$: for any $\left( k_1,k_2 \right) \in K$, $f_1\left( k_1 \right) =k_2N$, $f_2\left( k_2 \right) =k_2N$, so $\left( k_1,k_2 \right) \subseteq G_1\times \_HG_2$. (ii) $G_1\times \_HG_2\subseteq K$: let $\left( g_1,g_2 \right) \in G_1\times \_HG_2$; then $f_1\left( g_1 \right) =f_2\left( g_2 \right) =g_2N$. Since $p_1$ is surjective, there is $b\in G_2$ such that $\left( g,b \right) \in K$, $f_1\left( g_1 \right) =bN$, so $g_{2}^{-1}b\in N$, i.e. $b=g_2n$ where $n\in N=\mathrm{Ker}p_1$, i.e. $\left( 1,n \right) \in K$, so $\left( g_1,b \right) \left( 1,n \right) ^{-1}=\left( g_1,bn^{-1} \right) =\left( g_1,g_2 \right) \in K$.

> Let $\left\lbrace  G_{\alpha} \right\rbrace  \_{\alpha \in I}$ be a family of groups indexed by $I$. For a positive integer $n$, call an $n$-tuple $a=\left( x_1,\cdots ,x_n \right)$ a word of length $n$ over $\left\lbrace  G_{\alpha} \right\rbrace $, where $x_i\in \bigsqcup_{\alpha \in I}{G_{\alpha}}$. By convention there is an empty word of length 0, denoted $e$.
> (a) Construct an equivalence relation $\sim$ on the set of all words over $\left\lbrace  G_{\alpha} \right\rbrace $ as follows:
> a1. let $e_\alpha$ denote the identity of $G_\alpha$; then $$\left( x_1,\cdots ,x_{i-1},e_{\alpha},x_{i+1},\cdots ,x_n \right) \sim \left( x_1,\cdots ,x_{i-1},x_{i+1},\cdots ,x_n \right) ;$$
> a2. if $x_i$, $x_{i+1}$ both belong to the same $G_\alpha$, then $$\left( x_1,\cdots ,x_{i-1},x_{i+1},\cdots ,x_n \right) \sim \left( x_1,\cdots ,x_{i-1}x_{i+1},\cdots ,x_n \right) .$$
> Denote the equivalence class of a word $a$ by $[a]$. For words $a=\left( x_1,\cdots ,x_n \right)$, $b=\left( y_1,\cdots ,y_m \right)$, define their product as $$ab=\left( x_1,\cdots ,x_n,y_1,\cdots ,y_m \right) .$$ Denote the set of all equivalence classes of words over $\left\lbrace  G_{\alpha} \right\rbrace $ by $\ast \_{\alpha \in I}G_{\alpha}$. Prove that a multiplication on $\ast \_{\alpha \in I}G_{\alpha}$ can be defined.
> (b) Let $G=G_1\ast \cdots \ast G_n$ be the free product of groups, $q_i\,\,: G_i\rightarrow G$ sending $x_i$ to $[(x_i)]$, $\psi \_i\,\,: G_i\rightarrow S$ a group homomorphism, for $i=1,\cdots,n$. Prove there exists a unique group homomorphism $\psi \,\,: G\rightarrow S$ such that $\psi \circ q_i=\psi \_i$ for every $i=1,\cdots,n$.

(a) We first prove that the multiplication defined in the problem is well-defined. Take $a\in [a]$, $a'\in [a]$, where $a=\left( x_1,\cdots ,x_n \right)$ has been fully reduced by rules a1, a2 to the shortest word length, while $a^{\prime}=\left( x_{1}^{\prime},\cdots ,x_{n^{\prime}}^{\prime} \right)$ has not been fully reduced. We only need to prove
$$
ab=\left( x_1,\cdots ,x_n,y_1,\cdots ,y_m \right) \sim a^{\prime}b=\left( x_{1}^{\prime},\cdots ,x_{n^{\prime}}^{\prime},y_1,\cdots ,y_m \right),
$$
which follows by first using rules a1, a2 to reduce the part $x_{1}^{\prime},\cdots ,x_{n^{\prime}}^{\prime}$, then stopping.

First, $[e]\in \ast \_{\alpha \in I}G_{\alpha}$ is clearly the identity element. Next, by the closure of the monoid formed by all words under word multiplication, the multiplication of equivalence classes of words is also closed. For a word $a$, take $a^{-1}=\left( x_{n}^{-1},\cdots ,x_{1}^{-1} \right)$; then
$$
aa^{-1}=a^{-1}a=e ,
$$
all the $e_i$, $i=1,\cdots,n$, are the identity element of some $G_\alpha$, hence
$$
\left[ a \right] \left[ a^{-1} \right] =\left[ a^{-1} \right] \left[ a \right]  =\left[ e \right] ,
$$
so every element has an inverse, namely $\left[ a \right] ^{-1}=\left[ a^{-1} \right] $. So $\ast \_{\alpha \in I}G_{\alpha}$ indeed forms a group under this multiplication.

(b) For any word $w=\left( x_1,\cdots ,x_k \right)$, $x_1\in G_{\alpha_1},\cdots ,x_k\in G_{\alpha_k}$, define $\phi$ as
$$
\phi \left( w \right) =\phi \left( \left( x_1,\cdots ,x_k \right) \right) =\psi _1\left( x_1 \right) \cdots \psi _k\left( x_k \right) ,
$$
then define $\psi$ as
$$
\psi \circ q_i\left( x_i \right) =\psi \left( \left[ x_i \right] \right) =\phi \left( x_i \right) =\psi _i\left( x \right) ,
$$
that is
$$
\psi \left( \left[ w \right] \right) =\psi \left( \left[ x_1 \right] \cdots \left[ x_k \right] \right) =\psi \left( \left[ x_1 \right] \right) \cdots \psi \left( \left[ x_k \right] \right) =\phi \left( x_1 \right) \cdots \phi \left( x_k \right) .
$$
This constructs a $\psi$ satisfying the requirement. Now suppose $\psi'$ also satisfies the requirement; then we have
$$
\begin{aligned}
\psi ^{\prime}\left( \left[ w \right] \right) &=\psi ^{\prime}\left( \left[ x_1 \right] \cdots \left[ x_k \right] \right)
\\
&=\psi ^{\prime}\left( \left[ x_1 \right] \right) \cdots \psi ^{\prime}\left( \left[ x_k \right] \right)
\\
&=\left( \psi ^{\prime}\circ q_1 \right) \left( x_1 \right) \cdots \left( \psi ^{\prime}\circ q_k \right) \left( x_k \right)
\\
&=\psi _1\left( x_1 \right) \cdots \psi _k\left( x_k \right)
\\
&=\psi \left( \left[ x_1 \right] \right) \cdots \psi \left( \left[ x_k \right] \right)
\\
&=\psi \left( \left[ x_1 \right] \cdots \left[ x_k \right] \right)
\\
&=\psi \left( \left[ w \right] \right) ,
\end{aligned}
$$
so $\psi'=\psi$.

> Let $S$ be a nonempty set. For $\alpha\in S$, let
> $$G_{\alpha}=\left\lbrace  \cdots ,\alpha ^{-1},e_{\alpha}=\alpha ^0,\alpha =\alpha ^1,\alpha ^2,\cdots \right\rbrace  $$
> be the infinite cyclic group generated by $\alpha$. Call $\ast \_{\alpha \in S}G_{\alpha}$ the free group generated by $S$, denoted $F(S)$. Let $R$ be a subset of $F(S)$, $N$ the smallest normal subgroup of $F(S)$ containing $R$, and let $G=F(S)/N$; call $G$ the group generated by the generating set $S$ under the relations $R$, also denoted $G=\left\langle S \middle\vert R \right\rangle$. If $S=\left\lbrace  s_1,\cdots ,s_n \right\rbrace $, $R=\left\lbrace  r_1,\cdots ,r_m \right\rbrace $, we may write more explicitly
> $$\left\langle S \middle\vert R \right\rangle =\left\langle s_1,\cdots ,s_n \middle\vert r_1=\cdots =r_m=e \right\rangle .$$
> In particular, when $r_i=\alpha^{-i}\beta^j$, the relation $r_i=e$ may also be written $\alpha^i=\beta^j$.
> (a) Determine the structure of the groups $\left\langle r,s \middle\vert r^4=s^2=e,s^{-1}rs=r^{-1} \right\rangle $ and $\left\langle i,j \middle\vert i^4=e,i^2=j^2,j^{-1}ij=j^{-1} \right\rangle$.
> (b) Write down a possible set of generators and relations for $\mathbb{Z} \times \mathbb{Z}$ and for $S_4$.

(a) $D_4$, $C_4$.
(b) $\left\langle a,b \middle\vert aba^{-1}b^{-1}=e \right\rangle$, $\left\langle s,t \middle\vert s^2=e,t^3=e,\left( st \right) ^4=e \right\rangle$.

# Group Actions

Reference: Abstract Algebra, by Chen Meng, Wang Qingxue, and Li Zhiyuan. This book is the lecture notes for the Abstract Algebra I course at Fudan University.

All problems in this article come from Section 1.7 of this book.

---

Here are some supplementary results.

> **(Class equation)** A finite group $G$ satisfies
> $$\left\vert G \right\vert=\left\vert Z\left( G \right) \right\vert+\sum_{x\in \Sigma ^{\prime}}{\left[ G:Z_G\left( x \right) \right]},$$
> where $\Sigma ^{\prime}$ is the set of orbit representatives not in $Z(G)$, and $Z_G\left( x \right)$ is the set of all elements commuting with $x$.

Consider the conjugation action of $G$ on itself; then for any $x\in G$,
$$
\left\vert \mathrm{Cl}\left( x \right) \right\vert=\left\vert \mathrm{Orb}\left( x \right) \right\vert=\left\vert G \right\vert/\left\vert \mathrm{Stab}\left( x \right) \right\vert=\left[ G:\mathrm{Stab}\left( x \right) \right] =\left[ G:Z_G\left( x \right) \right],
$$
where we used Lagrange's theorem. At the same time $G$ is the disjoint union of its various orbits/classes, i.e.
$$
G=\bigsqcup_{x\in \mathrm{cl}}{\mathrm{Cl}\left( x \right)},
$$
where $\mathrm{cl}$ is the set of class representatives. Also, noting that $Z_G\left( e \right) =\mathrm{Stab}\left( e \right) =G$, and that the union of the conjugacy classes of size 1 is exactly $Z\left( G \right)$, we get
$$
\left\vert G \right\vert=\sum_{x\in \mathrm{cl}}{\left\vert \mathrm{Cl}\left( x \right) \right\vert}=\sum_{x\in \mathrm{cl}}{\left[ G:Z_G\left( x \right) \right]}=\sum_{x\in \mathrm{cl},x\in Z\left( G \right)}{\left[ G:Z_G\left( x \right) \right]}+\sum_{x\in \mathrm{cl},x\notin Z\left( G \right)}{\left[ G:Z_G\left( x \right) \right]}=\left\vert Z\left( G \right) \right\vert+\sum_{x\in \Sigma ^{\prime}}{\left[ G:Z_G\left( x \right) \right]}.
$$

> **(Congruence lemma for $p$-group actions)** If $Q$ is a $p$-group acting on a finite set $X$, then
> $$\left\vert X \right\vert=\left\vert \mathrm{Fix}\left( G \right) \right\vert\left( \mathrm{mod}\;p \right).$$

Following the same idea as the class equation, we get $X=\bigsqcup_{x\in \Sigma}{\mathrm{Orb}\left( x \right)}$, where $\Sigma$ is the set of orbit representatives.
$$
\left\vert X \right\vert=\sum_{x\in \Sigma}{\left\vert \mathrm{Orb}\left( x \right) \right\vert}=\left\vert \mathrm{Fix}\left( Q \right) \right\vert+\sum_{x\in \Sigma ^{\prime}}{\left\vert \mathrm{Orb}\left( x \right) \right\vert},
$$
where $\Sigma'$ is the set of orbit representatives excluding the singleton orbits, i.e. the representatives of the non-fixed-point orbits. For $x\in\Sigma'$, by the orbit-stabilizer theorem, $\left\vert \mathrm{Orb}\left( x \right) \right\vert=\left[ Q:\mathrm{Stab}\left( x \right) \right]$; since $Q$ is a $p$-group, $\mathrm{Stab}\left( x \right) <Q$ is also a $p$-group, and $\left\vert \mathrm{Stab}\left( x \right) \right\vert<\left\vert Q \right\vert$, since otherwise $x\in\mathrm{Fix}(Q)$. So reducing both sides of the equation modulo $p$ gives the result.

> **(Conjugacy-class-splitting theorem for alternating groups)** A conjugacy class in $S_n$, when restricted to $A_n$, either remains a single class or splits into two classes of equal size. Splitting occurs if and only if all the cycle lengths in the cycle decomposition are distinct and odd. When splitting occurs, the two resulting classes are closed under inversion if and only if the number of cycles whose length is congruent to 3 mod 4 is even; otherwise the two classes are inverse to each other.

By the orbit-stabilizer theorem,
$$
\left\vert S_n \right\vert=\left\vert K_{S_n}\left( \sigma \right) \right\vert\left\vert C_{S_n}\left( \sigma \right) \right\vert=2\left\vert A_n \right\vert=2\left\vert K_{A_n}\left( \sigma \right) \right\vert\left\vert C_{A_n}\left( \sigma \right) \right\vert=2\left\vert K_{A_n}\left( \sigma \right) \right\vert\left\vert C_{S_n}\left( \sigma \right) \cap A_n \right\vert,
$$
where $\sigma \in A_n$. From this equation we know
$$
\left\vert K_{S_n}\left( \sigma \right) \right\vert=2\left\vert K_{A_n}\left( \sigma \right) \right\vert\quad \Longleftrightarrow \quad C_{S_n}\left( \sigma \right) \subseteq A_n.
$$
To guarantee $\sigma\in A_n$, the cycle decomposition must necessarily have all parts of odd length — this already establishes part of the necessity.

Consider the cycle decomposition $\sigma =\pi \_1\pi \_2\cdots \pi \_s$; for any such $\sigma =\pi \_1\pi \_2\cdots \pi \_s$, suppose $\tau \sigma \tau ^{-1}=\sigma$.

When the $\pi_k$ all have odd order and are pairwise distinct, let $M_k$ denote the set of points moved by $\pi_k$. For any $x\in M_k$, $\left( \tau \sigma \tau ^{-1} \right) \left( x \right) =\sigma \left( x \right)$. If $\tau \left( x \right) \notin M_k$, then $x=\sigma \left( x \right)$, contradicting the choice of $x$, so $\tau \left( x \right) \in M_k$. Hence $\sigma \left( \tau \left( x \right) \right) =\tau \left( \sigma \left( x \right) \right)$. By the arbitrariness of $x$ and $\pi_k$, $\tau$ must have the form
$$
\tau =\pi _{1}^{i_1}\pi _{2}^{i_2}\cdots \pi _{s}^{i_s},
$$
and since each $\pi_k$ has odd order, $\tau \in A_n$, i.e. $C_{S_n}\left( \sigma \right) \subseteq A_n$. This proves sufficiency.

We now establish the remaining part of necessity. If some $\pi_k$ has even order, say $\pi_1$, then $\pi_1\in C_{S_n}\left( \sigma \right)$, so $C_{S_n}\left( \sigma \right) \nsubseteq A_n$. If no $\pi_k$ has even order but two of them have equal length, say
$$
\pi _1=\left( i_1i_2\cdots i_r \right) ,\quad \pi _2=\left( j_1j_2\cdots j_r \right),
$$
take $\tau =\left( i_1j_1 \right) \left( i_2j_2 \right) \cdots \left( i_rj_r \right)\in C_{S_n}\left( \sigma \right) $, so again $C_{S_n}\left( \sigma \right) \nsubseteq A_n$.

Finally we need to show that $K_{S_n}\left( \sigma \right) -K_{A_n}\left( \sigma \right)$ does not split any further, to guarantee "splitting into exactly two classes of equal size." Take any transposition $\tau$; since
$$
\left\vert K_{S_n}\left( \sigma \right) \right\vert=\left\vert K_{S_n}\left( \tau \sigma \tau ^{-1} \right) \right\vert=2\left\vert K_{A_n}\left( \tau \sigma \tau ^{-1} \right) \right\vert=2\left\vert K_{A_n}\left( \sigma \right) \right\vert,
$$
we get $\left\vert K_{A_n}\left( \tau \sigma \tau ^{-1} \right) \right\vert=\left\vert K_{A_n}\left( \sigma \right) \right\vert$ and $K_{A_n}\left( \tau \sigma \tau ^{-1} \right) \cap K_{A_n}\left( \sigma \right) =\emptyset$.

For the second half of the theorem, when splitting occurs, consider reversing an odd-length $l$-cycle
$$
\gamma =\left( a_1a_2\cdots a_l \right)
$$
then the reversing permutation
$$
\omega _l=\prod_{k=1}^{\left( l-1 \right) /2}{\left( a_ka_{l+1-k} \right)}
$$
is composed of $(l-1)/2$ pairwise disjoint transpositions, and
$$
\left( -1 \right) ^{\sum_i{\left( l_i-1 \right) /2}}=\left( -1 \right) ^{\left\vert \left\lbrace  l_i\equiv 3\left( \mathrm{mod}\;4 \right) \right\rbrace  \right\vert}.
$$

> **(Burnside's lemma / Cauchy–Frobenius theorem)** When a finite group $G$ acts on a finite set $X$, the number of orbits is
> $$\left\vert X/G \right\vert=\frac{1}{\left\vert G \right\vert}\sum_{g\in G}{\left\vert \mathrm{Fix}\left( g \right) \right\vert}.$$

Provable via the class equation.

<!-- > (**Pólya enumeration**) -->

Above are some supplementary notes.

---

> Let $p$ be a prime. If $\left\vert G \right\vert=p^m$, $m>0$, $G$ is usually called a $p$-group. Prove: the center $C\left( G \right)$ of the group $G$ satisfies $\left\vert C\left( G \right) \right\vert\ne 1$.

Consider the conjugation action of $G$ on itself. By the class equation
$$
\left\vert G \right\vert=\left\vert C\left( G \right) \right\vert+\sum_{x^{\prime}\in \Sigma ^{\prime}}{\left[ G:\mathrm{Stab}\left( x^{\prime} \right) \right]}
$$
we know $\left\vert C\left( G \right) \right\vert\equiv \left\vert C\left( G \right) \right\vert\left( \mathrm{mod}\;p \right) \equiv 0\left( \mathrm{mod}\;p \right)$, so $\left\vert C\left( G \right) \right\vert\ne 1$.

> A group of order $p^2$ is Abelian.

We first prove a lemma:

>> If $G/C\left( G \right)$ is cyclic, then $G$ is Abelian.

Since $G/C\left( G \right)$ is cyclic, there exists a non-identity element $g\in G$ such that $G=\left\langle gC\left( G \right) \right\rangle$. By the coset theorem, for any $a,b\in G$, there exist $z_1,z_2\in C\left( G \right)$ and $i,j\in \mathbb{Z}$ such that
$$
a=g^iz_1,\quad b=g^jz_2,
$$
and $ab=g^iz_1g^jz_2=g^ig^jz_1z_2=g^{i+j}z_1z_2$, $ba=g^jz_2g^iz_1=g^jg^iz_2z_1=g^{i+j}z_1z_2$, so $ab=ba$, i.e. $G$ is Abelian.

By the previous problem, $p\mid \left\vert C\left( G \right)\right\vert$, and since $C\left( G \right) \le G$, we have $\left\vert C\left( G \right)\right\vert =p$ or $\left\vert C\left( G \right)\right\vert=p^2$. If $\left\vert C\left( G \right)\right\vert=p$, then $G/C\left( G \right) \simeq C_2$ is cyclic, so by the lemma $G$ is Abelian; if $\left\vert C\left( G \right)\right\vert=p^2$, then $G=C\left( G \right)$ is Abelian.

> Let the group $\mathrm{GL}\_3\left( \mathbb{R} \right) $ act on the column vector space $\mathbb{R} ^3$ by matrix multiplication.
>
> 1. Prove that the column vectors $\left( 1,0,0 \right) ^{\mathrm{T}}$ and $\left( 0,1,0 \right) ^{\mathrm{T}}$ lie in the same orbit.
> 2. Is this group action transitive?
> 3. Find the stabilizer $H=\mathrm{Stab}\left( \left( 0,0,1 \right) ^{\mathrm{T}} \right)$.

(1)
$$P=\left( \begin{matrix}0&1&0\\1&0&0\\0&0&1\\\end{matrix} \right)$$
satisfies $Pe_1=e_2$.

(2) Not transitive. There are two orbits, $\left\lbrace  0 \right\rbrace $ and $\mathbb{R} \backslash \left\lbrace  0 \right\rbrace $.

(3)
$$H=H=\left\lbrace  \left( \begin{matrix}a&b&0\\c&d&0\\e&f&1\\\end{matrix} \right) \middle\vert \det \left( \begin{matrix}a&b\\c&d\\\end{matrix} \right) \ne 0 \right\rbrace .$$

> Let $R$ be the ring of all polynomials over $\mathbb{R}$ in the indeterminates $x_1,x_2,x_3,x_4$. $S_4$ acts naturally on $R$: for any $\sigma\in S_4$, $p\left( x_1,x_2,x_3,x_4 \right)\in R$,
> $$\sigma \cdot p\left( x_1,x_2,x_3,x_4 \right) =p\left( x_{\sigma \left( 1 \right)},x_{\sigma \left( 2 \right)},x_{\sigma \left( 3 \right)},x_{\sigma \left( 4 \right)} \right).$$
> (a) Let $q=x_1x_2-x_3x_4\in R$. Find $\mathrm{Stab}\left( q \right) $, $\mathrm{Stab}\left( q^2 \right)$, and determine their structures.
> (b) Give an $r\in R$ such that $\mathrm{Stab}\left( r \right) =A_4$.

(a) Clearly
$$
\mathrm{Stab}\left( q \right) =\left\langle \left( 12 \right) ,\left( 34 \right) \right\rangle =\left\lbrace  e,\left( 12 \right) ,\left( 34 \right) ,\left( 12 \right) \left( 34 \right) \right\rbrace  \simeq C_2\times C_2,
$$
isomorphic to the Klein four-group. And $q^2=x_{1}^{2}x_{2}^{2}+x_{3}^{2}x_{4}^{2}-2x_1x_2x_3x_4$, so we only need $\sigma \cdot q=\pm q$. The '+' case has already been fully found; the '-' case consists of $\left( 13 \right) \left(24  \right) $ and $\left(14  \right) \left( 23 \right)$, plus $\left( 1324 \right)$ and $\left( 1423 \right)$, giving 8 elements in total:
$$
\mathrm{Stab}\left( q^2 \right) =\left\lbrace  ​e,\left( 12 \right) ,\left( 34 \right) ,\left( 12 \right) \left( 34 \right) ,\left( 13 \right) \left( 24 \right) ,\left( 14 \right) \left( 23 \right) ,\left( 1324 \right) ,\left( 1423 \right) ​ \right\rbrace .
$$
Then, by the earlier discussion, $\mathrm{Stab}\left( q \right) \lhd \mathrm{Stab}\left( q^2 \right)$, and the quotient group has only two elements, corresponding to "sending $q$ to $+q$" and "sending $q$ to $-q$" respectively. Forming the quotient group $\mathrm{Stab}\left( q^2 \right) /\mathrm{Stab}\left( q \right)$ and choosing $e$ and $\left( 13 \right) \left( 24 \right)$ as representatives, the set of quotient-group representatives $H\simeq \mathrm{Stab}\left( q^2 \right) /\mathrm{Stab}\left( q \right)$ satisfies $H<G$, so there is a semidirect product decomposition:
$$
\mathrm{Stab}\left( q^2 \right) \simeq \mathrm{Stab}\left( q \right) \rtimes C_2\simeq \left( C_2\times C_2 \right) \rtimes C_2.
$$

(b) The Vandermonde determinant.

> Solve the following problems:
> (a) Find the number of conjugacy classes of the dihedral group $D_4$ and the number of elements in each conjugacy class. For each conjugacy class, write down a representative.
> (b) Find the number of conjugacy classes of $A_5$ and the number of elements in each conjugacy class. For each conjugacy class, write down a representative.

(a) There are 5 conjugacy classes in total; the character table in general is as follows:

|           | $e$ | $r²$ | ${r,r³}$ | ${s,sr²}$ | ${sr,sr³}$ |
|-----------|-----|------|----------|-----------|------------|
| $χ_{A1}$  |  1  |  1   |   1      |   1       |   1        |
| $χ_{A2}$  |  1  |  1   |   1      |   -1      |   -1       |
| $χ_{B1}$  |  1  |  1   |   -1     |   1       |   -1       |
| $χ_{B2}$  |  1  |  1   |   -1     |   -1      |   1        |
| $χ_E$     |  2  |  -2  |   0      |   0       |   0        |

(b) In $S_n$, elements with the same cycle type belong to the same class. But in $A_n$, even elements with the same cycle type may split into two classes, because in $A_n$ conjugation can only be carried out by even permutations, so elements linked by conjugation via an odd permutation in $S_n$ can only be split into two classes in $A_n$.

| Conjugacy class | Representative | Element type | Count |
| ----- | -------------------------------------- | ---------- | ---- |
| $C_1$ | $()$                                   | identity        | $1$  |
| $C_2$ | $(1\,2\,3)$                            | 3-cycle       | $20$ |
| $C_3$ | $(1\,2)(3\,4)$                         | double transposition (2-2 type) | $15$ |
| $C_4$ | $(1\,2\,3\,4\,5)$                      | 5-cycle (class 1)  | $12$ |
| $C_5$ | $(1\,2\,3\,5\,4)$                      | 5-cycle (class 2)  | $12$ |

> Let $G$ be a group of order $n$. Let $p$ be the smallest prime factor of $n$, and $H$ a subgroup of $G$ of index $p$. Prove: $H$ is a normal subgroup of $G$.

Let $\Omega =\left\lbrace  xH:x\in G \right\rbrace $, and consider the group homomorphism
$$
\varphi :\quad G\rightarrow S_{\Omega}\simeq S_p,\quad \varphi \left( g \right) \left( xH \right) =\left( gx \right) H,
$$
clearly $\mathrm{Ker}\varphi \le H$, hence
$$
\left[ G:\mathrm{Ker}\varphi \right] =\left[ G:H \right] \left[ H:\mathrm{Ker}\varphi \right]=p\left[ H:\mathrm{Ker}\varphi \right] ,
$$
by the fundamental isomorphism theorem
$$
G/\mathrm{Ker}\varphi \simeq \mathrm{Im}\varphi \leq S_p,
$$
so
$$
\left[ G:\mathrm{Ker}\varphi \right] \mid \left\vert S_p \right\vert=p!,
$$
that is
$$
\left[ H:\mathrm{Ker}\varphi \right] \mid \left( p-1 \right) !,
$$
and at the same time $\left[ H:\mathrm{Ker}\varphi \right] \mid \left\vert H \right\vert\mid \left\vert G \right\vert$, and $p$ is the smallest prime factor of $\left\vert G \right\vert$, so it must be that $\left[ H:\mathrm{Ker}\varphi \right] =1$, hence $H=\mathrm{Ker}\varphi \trianglelefteq G$.

> Color each face of a regular octahedron using 8 given distinct colors, requiring each face to be colored with a single color and all faces to have distinct colors. Up to rotational congruence, how many distinct coloring schemes are there?

By Burnside's lemma,
$$
N=\frac{1}{\left\vert O \right\vert}\sum_{g\in O}{\left\vert \mathrm{Fix}\left( g \right) \right\vert}=\frac{1}{24}\left( 8!+0+\cdots +0 \right) =1680.
$$

> Let a group $G$ act on a set $X$. If for any element $g\in G$ satisfying $gx=x$ $\left( \forall x\in X \right)$ we always have $g=e$, then the action of $G$ on $X$ is called faithful. If for any $x\in X$ and $g\in G$ satisfying $gx=x$ we always have $g=e$, then the action of $G$ on $X$ is called free. Determine whether the following group actions are faithful or free:
> (a) the dihedral group $D_4$ acting on itself by conjugation;
> (b) $\mathrm{SO}\_n\left( \mathbb{R} \right)$ acting on $\mathbb{R} ^n\backslash \left\lbrace  0 \right\rbrace $ $\left( n\ge 2 \right)$.

(a) Free clearly implies faithful. Considering the center of $D_4$, we see the action is neither free nor faithful.

(b) When $n=2$, on the plane minus the origin, a nontrivial rotation has no fixed points, so the action is faithful and free. But when $n\geq3$, there are fixed poles, so the action is faithful but not free.

> Let $S^1$ denote the group formed by the unit circle in $\mathbb{C}$ under complex multiplication, and let $S^3$ denote the unit sphere in $\mathbb{C}^2$. Consider the following group action:
> $$\begin{aligned}S^1\times S^3&\rightarrow S^3\\\left( \mathrm{e}^{\mathrm{i}\theta},\left( z_1,z_2 \right) \right) &\mapsto \left( \mathrm{e}^{\mathrm{i}\theta}z_1,\mathrm{e}^{\mathrm{i}\theta}z_2 \right)\end{aligned}.$$
> (a) Prove this action is an intransitive free action;
> (b) Prove that the set of orbit-equivalence classes of this action is in one-to-one correspondence with the unit sphere $S^2$ in $\mathbb{R^3}$.

(a) Free: what is meant by free is "every non-identity element moves every element"; compared to faithful, which only requires "every non-identity element moves some element," this is a stricter condition. We check whether a counterexample exists:
$$
\mathrm{e}^{\mathrm{i}\theta}\left( z_1,z_2 \right) =\left( z_1,z_2 \right) ,
$$
then it must be that $\left( \mathrm{e}^{\mathrm{i}\theta}-1 \right) z_1=0$ and $\left( \mathrm{e}^{\mathrm{i}\theta}-1 \right) z_2=0$; since $\mathrm{e}^{\mathrm{i}\theta}\ne 1$ (otherwise it is the identity, which we are not considering), we get $z_1=z_2=0$, so $\left( z_1,z_2 \right) \notin \mathbb{C} ^2$ [i.e. does not lie on the unit sphere], a contradiction. Hence the action must be free.

Transitive: what is meant by transitive is "there is only one orbit." Consider the orbit $\left\lbrace  \mathrm{e}^{\mathrm{i}\theta}\left( 1,0 \right) =\left( \mathrm{e}^{\mathrm{i}\theta},0 \right) \right\rbrace $; clearly $\left( 0,1 \right)$ is not among these, so the action is not transitive.

(b) Background: the **Hopf fibration**, the **Bloch sphere**. The constructive proof used in this solution is exactly analogous to the representation of the state of a single-qubit system on the Bloch sphere in quantum optics.

Take the map
$$
h\,\,: S^3\rightarrow \mathbb{R} ^3,\quad \left( z_1,z_2 \right) \mapsto \left( x,y,z \right) ,
$$
where
$$
x=2\Re \left( z_1z_{2}^{\dagger} \right) , y=2\Im \left( z_1z_{2}^{\dagger} \right) , z=\left\vert z_1 \right\vert^2-\left\vert z_2 \right\vert^2.
$$
One can verify
$$
x^2+y^2+z^2=4\left\vert z_1 \right\vert^2\left\vert z_2 \right\vert^2+\left( \left\vert z_1 \right\vert^2-\left\vert z_2 \right\vert^2 \right) ^2=\left( \left\vert z_1 \right\vert^2+\left\vert z_2 \right\vert^2 \right) ^2=1
$$
so $\mathrm{Im}h\subseteq S^2$. And for any $\mathrm{e}^{\mathrm{i}\theta}\in S^1$, since $\left( \mathrm{e}^{\mathrm{i}\theta}z_1 \right) \left( \mathrm{e}^{\mathrm{i}\theta}z_2 \right) ^{\dagger}=z_1z_{2}^{\dagger}$, we see that $h$ is an orbit function (elements within the same orbit have the same value), i.e. it is $S^1$-invariant. Based on this, we can restrict $h$ to the orbit-equivalence classes, defining
$$
\bar{h}\,\,: S^3/S^1\rightarrow S^2,\quad \left\lbrace  \mathrm{e}^{\mathrm{i}\theta}\left( z_1,z_2 \right) \right\rbrace  \mapsto h\left( \left( z_1,z_2 \right) \right) ,
$$
where $S^3/S^1$ is the set of orbit-equivalence classes of $S^3$ under $S^1$. We now prove $\bar{h}$ is a bijection.

Consider $h\left( \left( w_1,w_2 \right) \right) =h\left( \left( z_1,z_2 \right) \right)$; then we have
$$
\begin{cases}
	\Re \left( w_1w_{2}^{\dagger} \right) =\Re \left( z_1z_{2}^{\dagger} \right)\\
	\Im \left( w_1w_{2}^{\dagger} \right) =\Im \left( z_1z_{2}^{\dagger} \right)\\
	\left\vert w_1 \right\vert^2-\left\vert w_2 \right\vert^2=\left\vert z_1 \right\vert^2-\left\vert z_2 \right\vert^2\\
\end{cases},\quad \left\vert w_1 \right\vert^2+\left\vert w_2 \right\vert^2=\left\vert z_1 \right\vert^2+\left\vert z_2 \right\vert^2=1.
$$
From the third and fourth equations, we have
$$
w_1=a\mathrm{e}^{\mathrm{i}\alpha}, z_1=a\mathrm{e}^{\mathrm{i}\beta}, w_2=b\mathrm{e}^{\mathrm{i}\gamma}, z_2=b\mathrm{e}^{\mathrm{i}\delta},
$$
and from the first and second equations, we further get
$$
w_1w_{2}^{\dagger}=ab\mathrm{e}^{\mathrm{i}\left( \alpha -\gamma \right)}=z_1z_{2}^{\dagger}=ab\mathrm{e}^{\mathrm{i}\left( \beta -\delta \right)},
$$
so $\alpha -\gamma =\beta -\delta =\phi$, i.e.
$$
w_1=a\mathrm{e}^{\mathrm{i}\alpha}, z_1=a\mathrm{e}^{\mathrm{i}\beta}, w_2=b\mathrm{e}^{\mathrm{i}\left( \alpha -\phi \right)}, z_2=b\mathrm{e}^{\mathrm{i}\left( \beta -\phi \right)}.
$$
so $\left( w_1,w_2 \right) =\mathrm{e}^{\mathrm{i}\left( \alpha -\beta \right)}\left( z_1,z_2 \right)$, hence $\bar{h}$ is single-valued (injective). Now consider any $\left( x,y,z \right) \in S^2$; note that
$$
\mathrm{e}^{\mathrm{i}\varphi}\left( \sqrt{\frac{1+z}{2}}\mathrm{e}^{\mathrm{i} \mathrm{arg}\left( x+\mathrm{i}y \right)},\sqrt{\frac{1-z}{2}} \right) ,
$$
where $\varphi$ is any real number, satisfies being mapped by $\bar{h}$ to $(x,y,z)$. Hence $\bar{h}$ is surjective.

To summarize, we have constructed $\bar{h}\,\,: S^3/S^1\rightarrow S^2$ as a bijection from the orbit-equivalence classes $S^3/S^1$ to $S^2$.

We now consider

> Let $\mathrm{U}\_n$ denote the group formed by all $n\times n$ unitary matrices under matrix multiplication, and $S^{2n-1}$ the unit sphere in $\mathbb{C}^n$. Let $\mathrm{U}\_n$ act naturally on $S^{2n-1}$ $(n\geq 2)$.
> (a) Prove this action is transitive;
> (b) Fix a point of $S^{2n-1}$; prove the stabilizer of this point is isomorphic to $\mathrm{U}\_{n-1}$.

(a) It suffices to prove that $\mathop {\underbrace{\left( 1,0,\cdots ,0 \right) }} \limits_{n}$ can be sent to any $v\in S^{2n-1}$.

If we choose all unit vectors, we obtain an orthonormal basis, which of course includes $\left( 1,0,\cdots ,0 \right)$; then we construct an orthonormal basis containing $v$, which the Gram–Schmidt process guarantees is possible.

Thus, $\left( v,w_1,w_2,\cdots ,w_{n-1} \right)$ is exactly a unitary matrix that sends $\left( 1,0,\cdots ,0 \right)$ to $v$.

(b) Without loss of generality, consider fixing $e_1=\left( 1,0,\cdots ,0 \right)$; then
$$
\mathrm{Stab}\left( e_1 \right) =\left\lbrace  U\in \mathrm{U}_n\,\,: Ue_1=e_1 \right\rbrace  .
$$
so the matrix representing $U$ must have the form
$$
\left( \begin{matrix}
	1&		0&		0\\
	0&		*&		*\\
	0&		*&		*\\
\end{matrix} \right) .
$$
It is easy to construct an isomorphism from the lower-right block to $\mathrm{U}\_{n-1}$.

> Let the set of all $n\times n$ real orthogonal matrices be
> $$\mathrm{O}_n\left( \mathbb{R} \right) =\left\lbrace  M\in M_n\left( \mathbb{R} \right) \,\,: M^tM=I \right\rbrace  ,$$
> which forms a group under matrix multiplication, called the orthogonal group of degree $n$. Let
> $$\mathrm{SO}_n\left( \mathbb{R} \right) =\left\lbrace  M\in \mathrm{O}_n\left( \mathbb{R} \right) \,\,: \det M=1 \right\rbrace  ,$$
> which likewise forms a group under matrix multiplication, called the special orthogonal group of degree $n$.
> (a) Prove: $\mathrm{SO}\_n\left( \mathbb{R} \right) \lhd \mathrm{O}\_n\left( \mathbb{R} \right)$, and $\left[ \mathrm{O}\_n\left( \mathbb{R} \right) \,\,: \mathrm{SO}\_n\left( \mathbb{R} \right) \right] =2$.
> Call the group formed by all automorphisms of a regular $n$-hedron in $\mathbb{R}^3$ under composition the symmetry group of the regular $n$-hedron, denoted $E_n$, where $n=4,6,8,12,20$; view $E_n$ as a subgroup of the orthogonal group $\mathrm{O}\_3\left( \mathbb{R} \right)$. Call $E_n\cap \mathrm{SO}\_3\left( \mathbb{R} \right)$ the rotation group of the regular $n$-hedron, denoted $F_n$, where $n=4,6,8,12,20$.
> (b) For $n=4,6,8,12,20$, find the orders of $E_n$ and $F_n$ respectively.
> (c) Prove $F_4\simeq A_4$.
> (d) Prove $F_6\simeq F_8 \simeq S_4$;
> (e) Prove $F_{12}\simeq F_{20} \simeq A_5$.

The background of this problem is point groups. The results here are all classical results in the theory of point groups. The proof of this problem can be found in any textbook covering point groups.

# Sylow Subgroups

Reference: Abstract Algebra, by Chen Meng, Wang Qingxue, and Li Zhiyuan. This book is the lecture notes for the Abstract Algebra I course at Fudan University.

All problems in this article come from Section 1.8 of this book.

---

Below are some supplementary notes.

> **(Cauchy's lemma)** Let $G$ be a finite Abelian group, $p$ a prime with $\left. p \middle\vert \left\vert G \right\vert \right.$; then $G$ contains an element of order $p$.

One can verify the theorem holds for groups of small order; we use mathematical induction, assuming the theorem holds for groups of order less than $\left\vert G \right\vert$. Take any $a\in G$ with $a\ne e$,

1. If $p \mid \mathrm{ord}\left(a\right)$, then $a^{\mathrm{ord}\left( a \right) /p}$ is what we seek.
2. If $p\nmid \mathrm{ord}\left( a \right)$, let $H=\left\langle a \right\rangle$, so $p\nmid \left\vert H \right\vert$; since $G$ is a finite Abelian group and $H$ is a subgroup, $H$ is normal. Let $\overline{G}=G/H$; then $p\mid \overline{G}$, and since $a\neq e$, $\left\vert H \right\vert>1$, so $\left\vert \overline{G} \right\vert<\left\vert G \right\vert$. By the induction hypothesis, there is an element of order $p$ in $\overline{G}$, $\overline{b}=bH$, i.e. $\overline{b}^p=b^pH=\overline{e}=H$, i.e. $b^p\in H$, so there exists a positive integer $q$ such that $b^{pq}=e$; then $b^q$ is what we seek.

> **(Sylow's first theorem)** Let a finite group $G$ satisfy $\left\vert G \right\vert=p^mk$, where $p$ is a prime and $p\nmid k$; then $G$ has at least one subgroup of order $p^m$, called a Sylow $p$-subgroup.

It is easy to verify the theorem holds for groups of small order; we use mathematical induction, assuming the result holds for groups of order less than $\left\vert G \right\vert$.

1. If $p\mid \left\vert Z\left( G \right) \right\vert$: since $Z\left( G \right)$ is a finite Abelian group, by Cauchy's lemma there is an element $a\in Z\left( G \right)$ of order $p$. Let $N=\left\langle a \right\rangle$; then $N\lhd Z\left( G \right) \lhd G$. Let $\overline{G}=G/N$; then $\left\vert G \right\vert=\left\vert \overline{G} \right\vert\left\vert N \right\vert=p\left\vert \overline{G} \right\vert$, so $p^{m-1}\mid \left\vert \overline{G} \right\vert$. By the induction hypothesis, there is a subgroup $\overline{H}<\overline{G}$ of order $p^{m-1}$, $\overline{H}=H/N$, $N\lhd H<G$, $\left\vert H \right\vert=\left\vert \overline{H} \right\vert\left\vert N \right\vert=p^{m-1}p=p^m$.
2. If $p\nmid \left\vert Z\left( G \right) \right\vert$: by the class equation $\left\vert G \right\vert=\left\vert Z\left( G \right) \right\vert+\sum_{x\in \Sigma ^{\prime}}{\left[ G:Z_G\left( x \right) \right]}$, where $\Sigma ^{\prime}$ is the set of representatives of the orbits not in $Z\left( G \right)$, there must be some $x'\in \Sigma'$ such that $p\nmid \left[ G:Z_G\left( x^{\prime} \right) \right]$. Since $\left\vert G \right\vert=\left\vert Z_G\left( x^{\prime} \right) \right\vert\left[ G:Z_G\left( x^{\prime} \right) \right]$, we get $p^m\mid \left\vert Z_G\left( x^{\prime} \right) \right\vert$; by the induction hypothesis, there is a subgroup of $Z_G\left( x^{\prime} \right)$ of order $p^m$.

> **(Sylow's second theorem)** Let $P$ be a Sylow $p$-subgroup of a finite group $G$; then any $p$-subgroup $Q$ of $G$ must be contained in some conjugate of $P$. In particular, all Sylow $p$-subgroups lie in the same conjugacy orbit.

Consider the conjugation action of $Q$ on $\mathrm{Conj}\left( P \right)$; claim: for $P^{\prime}\in \mathrm{Conj}\left( P \right)$,
$$
P^{\prime}\in \mathrm{Fix}\left( Q \right) \Longleftrightarrow Q\subseteq P^{\prime}.
$$
Sufficiency is obvious; we only prove necessity: take any $q\in Q$; we have $qP^{\prime}q^{-1}=P^{\prime}$, i.e. $qP^{\prime}=P^{\prime}q$, hence $QP^{\prime}=P^{\prime}Q$, so $P^{\prime}Q<G$. Using the formula
$$
\left\vert P^{\prime}Q \right\vert=\frac{\left\vert P^{\prime} \right\vert\left\vert Q \right\vert}{\left\vert P^{\prime}\cap Q \right\vert},
$$
since $\left\vert P^{\prime} \right\vert=p^m$, $\left\vert Q \right\vert=p^v\,\left( m\ge v\ge 1 \right)$, we have $\left\vert P^{\prime}\cap Q \right\vert=p^w\,\left( m\ge v\ge w\ge 1 \right)$, so $\left\vert P^{\prime}Q \right\vert=p^{m+v-w}\ge p^m$; but since $P^{\prime}Q$ is a subgroup, $\left\vert P^{\prime}Q \right\vert\le p^m$, so $\left\vert P^{\prime}\cap Q \right\vert=p^m$, i.e. $P^{\prime}\cap Q=Q$, $Q\subseteq P^{\prime}$.

By the orbit-stabilizer theorem, $\left\vert \mathrm{Conj}\_G\left( P \right) \right\vert=\left\vert G \right\vert\left\vert \mathrm{Stab}\_G\left( P \right) \right\vert$, and $P<\mathrm{Stab}\_G\left( P \right)$, so the exponent of $p$ in $\left\vert \mathrm{Conj}\_G\left( P \right) \right\vert$ is 0. Then by the congruence lemma for $p$-group actions, $\left\vert \mathrm{Conj}\_Q\left( P \right) \right\vert\equiv \left\vert \mathrm{Fix}\_P\left( Q \right) \right\vert\left( \mathrm{mod}\;p \right)$, so $\left\vert \mathrm{Fix}\_P\left( Q \right) \right\vert\ne 0$, i.e. $\mathrm{Fix}\_P\left( Q \right) \ne \emptyset$.

Taking $Q$ to also be a Sylow $p$-subgroup proves that all Sylow $p$-subgroups are conjugate.

> **(Sylow's third theorem)** Let $n_p$ be the number of Sylow $p$-subgroups of a finite group $G$; then
>
> 1. $n_p\equiv 1\left( \mathrm{mod}\;p \right)$,
> 2. $n_p\mid k$.

Consider the conjugation action of $P$ on $\mathrm{Conj}\_G\left( P \right) \equiv \mathrm{Syl}\_p\left( G \right)$. By the previous proposition, for any $P^{\prime}\in \mathrm{Fix}\left( P \right)$, $P\subseteq P^{\prime}$, and since $\left\vert P \right\vert=\left\vert P^{\prime} \right\vert$, $P=P^{\prime}$, so $\left\vert \mathrm{Fix}\left( P \right) \right\vert=\left\vert \left\lbrace  P \right\rbrace  \right\vert=1$. Then, by the congruence theorem for $p$-group actions together with the orbit-stabilizer theorem, we get
$$
n_p\equiv 1\left( \mathrm{mod}\;p \right).
$$

At the same time, $r_p=\left\vert \mathrm{Conj}\_G\left( P \right) \right\vert=\left[ G:N_G\left( H \right) \right]$, and $\left[ G:N_G\left( P \right) \right] \mid \left[ G:P \right] =k$, so
$$
n_p\mid k.
$$

> **(Cauchy's theorem)** Let $G$ be a finite group, $p$ a prime with $p\mid \left\vert G \right\vert$; then $G$ contains an element of order $p$.

Take a Sylow $p$-subgroup $P$ and a nontrivial element $x\in P$. Since $\mathrm{ord}\left( x \right) \mid \left\vert P \right\vert$, there exists a positive integer $d$ such that $x^{p^d}=e$, so $x^{p^{d-1}}$ is an element of order $p$.

Above are some supplementary notes.

---

# Solvable Groups

Reference: Abstract Algebra, by Chen Meng, Wang Qingxue, and Li Zhiyuan. This book is the lecture notes for the Abstract Algebra I course at Fudan University.

All problems in this article come from Section 1.9 of this book.

---

Below are some supplementary notes:

> **(Subnormal series)** For a group $G$, a chain
> $$1=G_0\lhd G_1\lhd G_2\lhd \cdots \lhd G_{r-1}\lhd G_r=G$$
> is called a subnormal series.

"Subnormal" means that $G_i$ need not be a normal subgroup of $G$ itself — normality is not necessarily preserved as the parent group grows larger. If $G_i\lhd G$ holds for every $G_i$, the chain is called a **normal series**.

<!-- > (**Quotient factors**) $G_1$, $G2/G_1$, $\cdots$, $G/G_{r-1}$ are called the **quotient factors of a normal series**.

The quotient groups in the series are called quotient factors.

> (**Length of a normal series**) $\#\left\lbrace  G_i\mid G_i\lhd G_{i+1}, G_i\ne G_{i+1} \right\rbrace $ is called the length of a normal series.

This just requires the series to be strictly increasing.

> (**Composition series**) If all the quotient factors are simple groups, the normal series is called a composition series. -->

> **(Galois's theorem)** If a solvable group $G$ acts primitively on a set $X$, then necessarily
> \[\left\vert X \right\vert=p^n, \qquad n\in\mathbb{N_+}\].
> That is, the size of $X$ must be a power of some prime $p$.

Above are some supplementary notes:

---
