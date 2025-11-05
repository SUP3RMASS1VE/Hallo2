module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/SUP3RMASS1VE/hallo2-SUP3R app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        message: "conda update -y -c conda-forge huggingface_hub"
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r requirements.txt",
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          xformers: true,
          triton: true
          // sageattention: true
        }
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "hf download fudan-generative-ai/hallo2 --local-dir ./pretrained_models && dir"
      }
    }
  ]
}
