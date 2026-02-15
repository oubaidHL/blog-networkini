{ pkgs, ... }: {
  channel = "unstable";
  packages = [ pkgs.nodejs_22 ];
  env = {};
  idx = {
    extensions = [ "google.gemini-cli-vscode-ide-companion" ];
    workspace = {
      onCreate = {
        npm-install = "npm install";
      };
    };
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm", "run", "dev", "--", "--port", "$PORT", "--host", "0.0.0.0"];
          manager = "web";
        };
      };
    };
  };
}