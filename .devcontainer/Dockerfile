FROM arm64v8/node:18-bullseye-slim


# Configure apt and install packages
RUN apt-get update \
    && apt-get -y install \
    --no-install-recommends \
    apt-utils \
    dialog \
    git \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*


# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=dialog
