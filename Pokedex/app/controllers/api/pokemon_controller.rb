class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    # fail
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end
end
