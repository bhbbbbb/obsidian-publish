


## conda

### create env

```shell
conda create --name myenv python=3.8
```

### copy env

```shell
conda create --name <new_env> --clone <env_to_clone>
```


---

## pip

### pip freeze bug

```shell
pip list --format=freeze > requirements.txt
```


---

## pytorch
### Install


- https://pytorch.org/get-started/locally/

```shell
conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch
```

---

## pylint

### generate `.pylintrc`

```shell
pylint --generate-rcfile > .pylintrc
```