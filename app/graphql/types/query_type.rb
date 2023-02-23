module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :items, [Types::ItemType], null: false, description: "Return a list of items"
    field :item, Types::ItemType, null: false, description: "Return an item" do
      argument :id, ID, required: true
    end

    field :artists, [Types::ArtistType], null: false, description: "Return a list of artists"
    field :artist, Types::ArtistType, null: false, description: "Returns an artist" do
      argument :id, ID, required: true
    end

    def items
      Item.all
    end

    def item(id:)
      Item.find(id)
    rescue ActiveRecord::RecordNotFound => e
      GraphQL::ExecutionError.new('Item does not exist.')
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}: #{e.record.errors.full_messages.join(', ')}")
    end

    def artists
      Artist.all
    end

    def artist(id:)
      Artist.find(id)
    end
  end
end
